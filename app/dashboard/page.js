import { Box, List, Typography } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'
import AddBar from './AddBar'
import Footer from '../Components/Footer'

const page = () => {
    return (
        <>
            <Box sx={{
                padding: { xs: '50px', sm: '100px' },
                height: '100vh',
                width: '100vw',
                background: 'linear-gradient(180deg, rgba(133,168,134,1) 30%, rgba(255,255,255,0) 100%)',
            }}>
                <Typography textAlign={'center'} fontWeight={'bold'} variant='h4'>Inventory Manager</Typography>
                <SearchBar />
                <AddBar />
                <Box sx={{ backgroundColor: 'white', height: '50vh', borderRadius: '5px' }}>
                    <List>
                    </List>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default page