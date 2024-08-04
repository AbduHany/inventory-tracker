'use client'
import { Add } from '@mui/icons-material'
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBar = ({ itemsCopy, setItemsCopy, collectionName, items, setItems }) => {

    const units = ['piece', 'lb', 'oz', 'g', 'kg', 'ml', 'L', 'cup']

    //adds or updates an item to the items list
    const handleAdd = async () => {
        if (itemName === '') {
            toast.error('Item name is missing 😔', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else if (quantity <= 0) {
            toast.error('Quantity must be greater than 0 😔', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else if (items.filter(item => item.name.toLowerCase() === itemName.toLowerCase() && item.unit === unit).length > 0) {

            // Updates an item if the item already exists (same unit)
            const itemToBeUpdated = items.filter(item => item.name.toLowerCase() === itemName.toLowerCase() && item.unit === unit)[0]
            const newQuantity = parseInt(quantity) + parseInt(itemToBeUpdated.quantity)
            updateDoc(doc(db, collectionName, itemToBeUpdated.id), {
                quantity: newQuantity,
            })
                .then(() => {
                    setItems(i => i.map(item => item.id === itemToBeUpdated.id ? { id: itemToBeUpdated.id, name: item.name, quantity: newQuantity, unit: item.unit } : item))
                    setItemsCopy(i => i.map(item => item.id === itemToBeUpdated.id ? { id: itemToBeUpdated.id, name: item.name, quantity: newQuantity, unit: item.unit } : item))
                    setItemName('')
                    setQuantity(0)
                    setUnit(units[0])
                }).catch((e) => {
                    toast.error(`Error updating document: ${e}`)
                });
        }
        else {
            // Adds a completely new item
            try {
                const docRef = await addDoc(collection(db, collectionName), {
                    name: itemName,
                    quantity,
                    unit
                });
                setItems([...items, { name: itemName, quantity, unit, id: docRef.id }])
                setItemsCopy([...itemsCopy, { name: itemName, quantity, unit, id: docRef.id }])
                setItemName('')
                setQuantity(0)
                setUnit(units[0])
            } catch (e) {
                toast.error(`Error adding document: ${e}`)
            }
        }
    }


    const [itemName, setItemName] = useState('');
    const updateItemName = (e) => {
        setItemName(e.target.value)
    }
    const [quantity, setQuantity] = useState(0);
    const updateQuantity = (e) => {
        setQuantity(e.target.value)
    }
    const [unit, setUnit] = useState(units[0]);
    const updateUnit = (e) => {
        setUnit(e.target.value)
    }
    return (
        <>
            <Box
                display='flex'
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems='center'
                justifyContent='center'
                gap={2}
                marginBottom={1}
            >
                <TextField
                    label="Item Name"
                    variant="filled"
                    size="small"
                    placeholder="Enter item name"
                    value={itemName}
                    onChange={updateItemName}
                    sx={{
                        borderRadius: '4px',
                        backgroundColor: 'white',
                    }} />
                <TextField
                    label="Quantity"
                    variant="filled"
                    size="small"
                    type="number"
                    placeholder="Enter quantity"
                    onChange={updateQuantity}
                    value={quantity}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '4px',
                    }}
                />
                <TextField
                    label="Unit"
                    size="small"
                    variant='filled'
                    select
                    value={unit}
                    onChange={updateUnit}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '4px',
                    }}
                >{units.map((val, idx) => (
                    <MenuItem key={idx} value={val}>{val}</MenuItem>
                ))}</TextField>
                <Button onClick={handleAdd} variant="contained" endIcon={<Add />}>
                    Add Item
                </Button>
            </Box >
        </>

    )
}

export default AddBar