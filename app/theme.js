'use client'
import { createTheme } from "@mui/material";
import { green, white } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: green[900],
        },
        secondary: {
            main: green[300]
        },
        buttonColor: {
            main: 'white',
        }
    },
    typography: {
        fontFamily: 'Poppins'
    }
})