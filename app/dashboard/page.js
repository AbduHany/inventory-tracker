import { Box, Card, List, Typography } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'
import AddBar from './AddBar'
import Footer from '../Components/Footer'
import InventoryObjects from './InventoryObjects'
import ExtraBar from './ExtraBar'

const page = () => {



    return (
        <>
            <Box
                sx={{
                    padding: { xs: '50px', sm: '100px' },
                    height: '100vh',
                    width: '100vw',
                    background: 'linear-gradient(180deg, rgba(133,168,134,1) 30%, rgba(255,255,255,0) 100%)',
                }}>
                <Typography
                    textAlign={'center'}
                    fontWeight={'bold'}
                    variant='h4'
                >Inventory Manager 📦
                </Typography>
                <SearchBar />
                <AddBar />
                <ExtraBar />
                <Box
                    sx={{
                        backgroundColor: 'white',
                        margin: 'auto',
                        maxWidth: '1000px',
                        borderRadius: '5px',
                        display: 'flex',

                    }}>
                    <InventoryObjects />
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default page