'use client'
import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: green[300],
        },
        secondary: {
            main: green[900]
        }
    },
    typography: {
        fontFamily: 'Poppins'
    }
})