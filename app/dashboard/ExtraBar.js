import { Box, Button } from '@mui/material'
import React from 'react'

const ExtraBar = () => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '50px',
            marginBottom: '10px',
        }}>
            <Button
                size='small'
                variant='contained'

            >
                📷 Add using Camera 📷
            </Button>
            <Button variant='contained'>
                ✨ AI Recipe ✨
            </Button>
        </Box>
    )
}

export default ExtraBar