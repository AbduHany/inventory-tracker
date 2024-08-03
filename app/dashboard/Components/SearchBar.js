'use client';
import React, { useEffect, useState } from 'react'
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ itemsCopy, setItems }) => {


    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        const filteredItems = itemsCopy.filter(item => item.name.toLowerCase().includes(value));
        setItems(value === '' ? itemsCopy : filteredItems);
    }

    return (
        <>
            <Box
                display='flex'
                justifyContent='center'
                marginY={2}>
                <TextField
                    onChange={handleSearch}
                    size='small'
                    InputProps={{
                        endAdornment: (<InputAdornment><SearchIcon /></InputAdornment>)
                    }}
                    prefix='Hey'
                    id="outlined-basic"
                    label="Search..."
                    variant="outlined"
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '4px',
                        maxWidth: '500px'
                    }} />
            </Box>
        </>
    )
}

export default SearchBar