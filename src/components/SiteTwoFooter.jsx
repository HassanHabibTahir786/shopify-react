import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MoneyIcon from '@mui/icons-material/Money';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

const SiteTwoFooter = () => {
    return (
        <Box>
            <Box sx={{backgroundColor: "black"}} >
                <Grid px={{ xs: 1, md: 6, lg: 11 }}  container sx={{  color: "white" }} >
                    <Grid item xs={12} sm={6} md={4} py={5}>
                        <Box sx={{

                            display: "flex", alignItems: "center"
                        }}>
                            <LocalShippingIcon sx={{ fontSize: "50px" }} />
                            <Box ml={2}>
                                <Typography fontWeight={700} sx={{
                                    fontSize: "14px", marginBottom: '5px',
                                    letterSpacing: '.05em'
                                }}>FREE SHIPPING & RETURN</Typography>
                                <Typography sx={{
                                    fontSize: '13px',
                                }}>Free shipping on all US orders</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} py={5}>
                        <Box sx={{

                            display: "flex", alignItems: "center"
                        }}>
                            <MoneyIcon sx={{ fontSize: "50px" }} />
                            <Box ml={2}>
                                <Typography fontWeight={700} sx={{
                                    fontSize: "14px", marginBottom: '5px',
                                    letterSpacing: '.05em'
                                }}>MONEY GAURNTEE</Typography>
                                <Typography sx={{
                                    fontSize: '13px',
                                }}>30 days money back guarantee</Typography>
                            </Box>
                        </Box>
                    </Grid> <Grid item xs={12} md={4} py={5}>
                        <Box sx={{

                            display: "flex", alignItems: "center"
                        }}>
                            <WifiCalling3Icon sx={{ fontSize: "50px" }} />
                            <Box ml={2}>
                                <Typography fontWeight={700} sx={{
                                    fontSize: "14px", marginBottom: '5px',
                                    letterSpacing: '.05em'
                                }}>ONLINE SUPPORT</Typography>
                                <Typography sx={{
                                    fontSize: '13px',
                                }}>We support online 24/7 on day</Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box >
    )
}

export default SiteTwoFooter