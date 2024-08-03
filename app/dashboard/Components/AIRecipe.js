import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const apiKey = process.env.OPEN_ROUTER_API_KEY
console.log(apiKey)

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '50vh',
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

    const prompt = `
    Create a detailed recipe based on the following ingredients: ${JSON.stringify(itemsCopy)} and reply with a json and only a json format, dont give me any text outside the json format.
    The JSON should include: cooking time, prep time, serving size, calories and the text of the recipe itself. Like this example and please only stick to this format nothing more or less:
    {
        calories: string,
        preptime: string,
        cooktime: string,
        servings: string,
        recipeName: string,
        recipe: string
    }
    `

    const generateRecipe = async () => {
        const result = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "meta-llama/llama-3.1-8b-instruct:free",
                "messages": [
                    { "role": "user", "content": prompt },
                ],
            })
        })

        const data = await result.json()
        const dataJSON = JSON.parse(data.choices[0].message.content)
        console.log(dataJSON)
    }


    return (
        <>
            <Button
                disabled
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
                        }}>
                        {output}
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
