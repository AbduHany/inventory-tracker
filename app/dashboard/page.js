'use client'
import { Box, Card, List, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import AddBar from './AddBar'
import Footer from '../Components/Footer'
import InventoryObjects from './InventoryObjects'
import ExtraBar from './ExtraBar'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const DashboardPage = ({ searchParams }) => {

    const collectionName = searchParams.email
    const [items, setItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const collectionRef = collection(db, collectionName);
            const querySnapshot = await getDocs(collectionRef);
            const documents = querySnapshot.docs.map(doc => ({
                ...doc.data()
            }));
            setItem(documents)
        }
        fetchData();
    }, [items, setItem, collectionName])

    return (
        <>
            <Box
                sx={{
                    padding: { xs: '50px', sm: '100px' },
                    height: '100vh',
                    width: '100vw',
                    background: 'linear-gradient(180deg, rgba(133,168,134,1) 30%, rgba(255,255,255,0) 100%)',
                }}>
                <Typography
                    textAlign={'center'}
                    fontWeight={'bold'}
                    variant='h4'
                >Inventory Manager 📦
                </Typography>
                <SearchBar />
                <AddBar collectionName={collectionName} items={items} setItem={setItem} />
                <ExtraBar />
                <Box
                    sx={{
                        backgroundColor: 'white',
                        margin: 'auto',
                        maxWidth: '1000px',
                        borderRadius: '5px',
                        display: 'flex',

                    }}>
                    <InventoryObjects collectionName={collectionName} items={items} setItem={setItem} />
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default DashboardPage