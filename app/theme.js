'use client'
import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
})

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
        fontFamily: `${poppins.style.fontFamily}, sans-serif`,
    }
})