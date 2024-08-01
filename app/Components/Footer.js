import { Container } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

const Footer = () => {
    return (
        <Container sx={{
            position: 'fixed',
            bottom: '20px',
            left: '25vw',
            textAlign: 'center',
            fontSize: '12px',
            width: '50vw',
        }}>Made By Abdelrahman Hany &copy;</Container>
    )
}

export default Footer