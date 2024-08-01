'use client';
import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

    return (
        <>
            <Box display='flex' justifyContent='center' marginY={4}>
                <TextField InputProps={
                    { endAdornment: (<InputAdornment><SearchIcon /></InputAdornment>) }
                } prefix='Hey' id="outlined-basic" label="Search..." variant="outlined" sx={{ width: '100vw' }} />
            </Box>
        </>
    )
}

export default SearchBar