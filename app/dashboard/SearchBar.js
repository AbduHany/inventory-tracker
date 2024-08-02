'use client';
import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
                marginY={2}>
                <TextField
                    size='small'
                    InputProps={{
                        endAdornment: (<InputAdornment><SearchIcon /></InputAdornment>)
                    }}
                    prefix='Hey'
                    id="outlined-basic"
                    label="Search..."
                    variant="outlined"
                    sx={{
                        width: '30vw',
                        backgroundColor: 'white',
                        borderRadius: '4px'
                    }} />
            </Box>
        </>
    )
}

export default SearchBar