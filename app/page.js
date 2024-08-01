'use client'
import styled from "@emotion/styled";
import { AppBar, Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CardStack from "./Components/CardStack";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          padding: '100px',
          height: '100dvh',
          width: '100%',
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
        <Button sx={{
        }} color="secondary" variant="contained">Start Tracking</Button>
        <Footer></Footer>
      </Box>
    </>
  );
}
