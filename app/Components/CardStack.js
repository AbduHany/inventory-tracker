import React from 'react'
import { Stack, Card, Typography, CardContent } from '@mui/material'
import styled from '@emotion/styled'

const CardStack = () => {
    const MyCard = styled(Card)({
        backgroundColor: 'white',
        height: '20vh',
        width: '20vw',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '190px',
        minHeight: '250px',
        flexDirection: 'column',
        textAlign: 'center',
    })

    return (
        <Stack marginBottom={10} direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <MyCard elevation={10}>
                <Typography variant="h1">👌</Typography>
                <Typography variant='h5' fontWeight='bold'>Easy to use</Typography>
                <Typography paddingX={1} variant='p'>Intuitive and user-friendly interface.</Typography>
            </MyCard>
            <MyCard elevation={10}>
                <Typography variant="h1">📦</Typography>
                <Typography variant='h5' fontWeight='bold'>Item Tracking</Typography>
                <Typography padding={1} variant='p'>Add, remove, and manage items with quantity tracking.</Typography>
            </MyCard>
            <MyCard elevation={10}>
                <Typography variant="h1">✨</Typography>
                <Typography variant='h5' fontWeight='bold'>Generate Recipes</Typography>
                <Typography padding={1} variant='p'>Quickly generate AI recipes based on your inventory.</Typography>
                <Typography></Typography>
            </MyCard>
        </Stack>
    )
}

export default CardStack