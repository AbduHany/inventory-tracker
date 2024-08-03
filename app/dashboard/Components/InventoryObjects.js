import { Delete, Edit } from '@mui/icons-material'
import { Box, Divider, IconButton, List, ListItem, Typography } from '@mui/material'
import { doc, deleteDoc } from "firebase/firestore"
import React from 'react'
import { db } from '../../firebaseConfig'
import EditModal from './EditModal'

const InventoryObjects = ({ itemsCopy, setItemsCopy, collectionName, items, setItems }) => {



    const handleDelete = async (id, collectionName) => {
        try {
            const docRef = doc(db, collectionName, id);
            await deleteDoc(docRef)
                .then(() => {
                    setItems(items.filter(item => item.id !== id))
                    setItemsCopy(itemsCopy.filter(item => item.id !== id))
                });
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <List sx={{ width: '100%', padding: '0' }}>
            <Typography sx={{ marginY: '15px' }} fontWeight='bold' fontSize={20} textAlign='center' variant='h5'>Your Pantry Items</Typography>
            <Divider />
            {items.map((val, idx) => (
                <ListItem key={idx} sx={{ display: 'flex', backgroundColor: (idx % 2 == 0) ? 'white' : '#e6e6e6', justifyContent: 'space-between' }}>
                    <Box >
                        <Typography variant='h7'>{val.name}</Typography>
                        <Typography fontSize={12}>{val.quantity} {val.unit}</Typography>
                    </Box>
                    <Box>
                        <EditModal
                            name={val.name}
                            quantity={val.quantity}
                            unit={val.unit} id={val.id}
                            collectionName={collectionName}
                            items={items}
                            setItems={setItems}
                        />
                        <IconButton onClick={() => { handleDelete(val.id, collectionName) }} >
                            <Delete />
                        </IconButton>
                    </Box>
                </ListItem>
            ))
            }
        </List >
    )
}

export default InventoryObjects