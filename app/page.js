'use client'
import styled from "@emotion/styled";
import { AppBar, Box, Button, Card, Container, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import CardStack from "./Components/CardStack";
import Footer from "./Components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState();
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle email input change
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail.toLowerCase());
    if (validateEmail(newEmail)) {
      setError('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  const isEmailValid = validateEmail(email);

  return (
    <>
      <Box
        sx={{
          padding: { xs: '50px', sm: '100px' },
          height: '100%',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(180deg, rgba(133,168,134,1) 30%, rgba(255,255,255,0) 100%)',
        }}
      >
        <Typography marginBottom="20px" textAlign='center' fontWeight={700} variant="h3" >Welcome to Inventory Manager</Typography>
        <Typography marginBottom="50px" textAlign='center' variant="p">Track, Manage, Succeed.</Typography>
        <CardStack />
        <TextField
          placeholder="Enter your email"
          onChange={handleEmailChange}
          size="small"
          type="email"
          error={!!error}
          helperText={error}
          sx={{
            marginBottom: '10px'
          }}
        ></TextField>
        {isEmailValid ? (
          <Link href={{
            pathname: '/dashboard',
            query: { email: email }
          }}>
            <Button color="primary" variant="contained">Start Tracking</Button>
          </Link>
        ) : (
          <Button sx={{ marginBottom: '30px' }} color="primary" variant="contained" >Start Tracking</Button>
        )}
        <Footer />
      </Box>
    </>
  );
}
