import { Box, Button } from '@mui/material'
import React from 'react'

const ExtraBar = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px',
        }}>
            <Box>
                <Button
                    size='small'
                    variant='contained'
                >
                    📷 Add using Camera 📷
                </Button>
            </Box>
            <Box >
                <Button
                    variant='contained'
                    size='small'
                >
                    ✨ AI Recipe ✨
                </Button>
            </Box>

        </Box>
    )
}

export default ExtraBar