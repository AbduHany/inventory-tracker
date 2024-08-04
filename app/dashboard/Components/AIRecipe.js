import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip } from '@mui/material';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  bgcolor: 'background.paper',
  border: '1px solid lightgrey',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function AIRecipe({ itemsCopy }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [buttonText, setButtonText] = React.useState('Generate')
  const [output, setOutput] = React.useState('')

  const myPrompt = `
    Create a detailed recipe based on the following ingredients (you don't have to use all of them): ${JSON.stringify(itemsCopy)} and reply with a json and only a json format, dont give me any text outside the json format.
    The JSON should include: cooking time, prep time, serving size, calories and the text of the recipe itself (only give me the recipe name in the recipeName json key). Like this example and please only stick to this format nothing more or less:
    {
        calories: (just a number)string,
        preptime: string,
        cooktime: string,
        servings: string,
        recipeName: (the name of the recipe/dish)string,
        recipe: (only contains ingredients, instructions) string
    }
    `



  const generateRecipe = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = myPrompt;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const textObject = JSON.parse(text);
    setOutput(textObject)
    setButtonText('Generate Again')
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='contained'
        size='small'
      >
        ✨ AI Recipe ✨
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ✨ Generate AI Recipe ✨
          </Typography>
          <Button
            onClick={generateRecipe}
            color='secondary'
            variant='contained'
            sx={{
              marginTop: '10px',
              minWidth: '100px',
            }}
          >
            {buttonText}
          </Button>
          <Box
            sx={{
              border: '1px solid lightgray',
              width: '100%',
              height: '100%',
              marginTop: '20px',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
            }}>
            {output.recipeName && <Typography textAlign='center' variant='h5'>{output.recipeName}</Typography>}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '10px' }}>
              {output.calories && <Chip label={output.calories} />}
              {output.preptime && <Chip label={output.preptime} />}
              {output.cooktime && <Chip label={output.cooktime} />}
              {output.servings && <Chip label={output.servings} />}
            </Box>
            {output.recipe && <ReactMarkdown>{output.recipe}</ReactMarkdown>}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
