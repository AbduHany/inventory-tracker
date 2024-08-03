import { Box, Button } from '@mui/material'
import React from 'react'
import AIRecipe from './AIRecipe'

const ExtraBar = ({ itemsCopy }) => {

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
                    disabled
                    size='small'
                    variant='contained'
                >
                    📷 Add using Camera 📷
                </Button>
            </Box>
            <Box >
                <AIRecipe itemsCopy={itemsCopy} />
            </Box>

        </Box>
    )
}

export default ExtraBar