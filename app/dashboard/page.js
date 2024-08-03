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
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, collectionName);
                const querySnapshot = await getDocs(collectionRef);
                const documents = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setItems(documents)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [])

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
                <AddBar collectionName={collectionName} items={items} setItems={setItems} />
                <ExtraBar />
                <Box
                    sx={{
                        backgroundColor: 'white',
                        margin: 'auto',
                        maxWidth: '1000px',
                        borderRadius: '5px',
                        display: 'flex',

                    }}>
                    <InventoryObjects collectionName={collectionName} items={items} setItems={setItems} />
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default DashboardPage