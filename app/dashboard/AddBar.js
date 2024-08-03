'use client'
import { Add } from '@mui/icons-material'
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

const AddBar = ({ collectionName, items, setItems }) => {

    const units = ['piece', 'lb', 'oz', 'g', 'kg', 'ml', 'L', 'cup']

    //adds a new item to the items list
    const handleAdd = async () => {
        if (itemName === '' || quantity === 0)
            alert('Item name or Quantity is missing 😔');
        else {
            try {
                const docRef = await addDoc(collection(db, collectionName), {
                    name: itemName,
                    quantity,
                    unit
                });
                setItems([...items, { name: itemName, quantity, unit, id: docRef.id }])
                setItemName('')
                setQuantity(0)
                setUnit(units[0])
            } catch (e) {
                console.error('Error adding document: ', e);
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