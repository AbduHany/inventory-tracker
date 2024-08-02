import { Delete, Edit } from '@mui/icons-material'
import { Box, Divider, IconButton, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const InventoryObjects = ({ collectionName, items, setItem }) => {
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
                        <IconButton>
                            <Edit />
                        </IconButton>
                        <IconButton>
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