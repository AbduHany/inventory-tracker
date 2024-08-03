'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, MenuItem, TextField } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { db } from '../../firebaseConfig';
import { collection, doc, updateDoc } from 'firebase/firestore';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 3,
};

export default function EditModal({ name, quantity, unit, id, collectionName, items, setItems }) {

    const units = ['piece', 'lb', 'oz', 'g', 'kg', 'ml', 'L', 'cup']

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setNewName(name)
        setNewQuantity(quantity)
        setNewUnit(unit)
        setOpen(false)
    };

    const [newName, setNewName] = React.useState(name)
    const [newQuantity, setNewQuantity] = React.useState(quantity)
    const [newUnit, setNewUnit] = React.useState(unit)


    React.useEffect(() => {
        setNewName(name)
        setNewQuantity(quantity)
        setNewUnit(unit)
    }, [name, quantity, unit])

    const handleNameChange = (e) => { setNewName(n => n = e.target.value) }
    const handleQuantityChange = (e) => { setNewQuantity(n => n = e.target.value) }
    const handleUnitChange = (e) => { setNewUnit(n => n = e.target.value) }


    const handleSave = async () => {
        if (newName === '' ||
            newQuantity === '' ||
            newUnit === ''
        ) {
            alert('Please fill empty fields 🤷')
        }
        else {
            updateDoc(doc(db, collectionName, id), {
                name: newName,
                quantity: newQuantity,
                unit: newUnit
            })
                .then(setItems(i => i.map(item =>
                    item.id === id ? { id: id, name: newName, quantity: newQuantity, unit: newUnit } : item
                )))
                .then(() => {
                    setOpen(false)
                })
        }
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <Edit />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography
                        marginBottom={1}
                        variant="h6"
                        component="h2">
                        Editing: {`${name} - ${quantity}${unit}`}
                    </Typography>
                    <Box flexDirection={{ md: 'row', xs: 'column' }} justifyContent='center' alignItems='center' display='flex' gap={2}>
                        <TextField
                            onChange={(e) => handleNameChange(e)}
                            size='small'
                            value={newName}
                            sx={{ flex: '4' }}
                        ></TextField>
                        <TextField
                            type='number'
                            onChange={(e) => handleQuantityChange(e)}
                            sx={{ flex: '1' }}
                            size='small'
                            value={newQuantity}
                        ></TextField>
                        <TextField
                            onChange={(e) => handleUnitChange(e)}
                            sx={{ flex: '1' }}
                            size="small"
                            select
                            value={newUnit}
                        >{units.map((val, idx) => (
                            <MenuItem key={idx} value={val}>{val}</MenuItem>
                        ))}</TextField>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </Box>



                </Box>
            </Modal>
        </>
    );
}