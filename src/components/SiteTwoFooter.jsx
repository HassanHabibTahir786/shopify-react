import React from 'react'
import { Box, Grid, Typography, FormControl, OutlinedInput, Button, TextField, styled, Stack } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MoneyIcon from '@mui/icons-material/Money';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { FaFacebookF, FaPinterestP } from 'react-icons/fa';

import amazon from '../images/footerLogo/amazon.png';
import googlepay from '../images/footerLogo/googlepay.png';
import mastercard from '../images/footerLogo/mastercard.png';
import pay from '../images/footerLogo/pay.png';
import payoneer from '../images/footerLogo/payoneer.png';
import skrill from '../images/footerLogo/skrill.png';
import snsmungpay from '../images/footerLogo/snsmungpay.png';
import visa from '../images/footerLogo/visa.png';

const NavbarStyledHeading = styled(Typography)({
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "13px",
});
const NavbarStyledSubHeading = styled(Typography)({
    marginBottom: "5px",
    width: "max-content",
    transition: "all .5s",
    fontSize: "13px",
    cursor: "pointer",
    "&:hover": {
        opacity: .7,
        textDecoration: 'underline'
    }
});

const SiteTwoFooter = () => {
    return (
        <Box>
            <Box sx={{ backgroundColor: "black" }} >
                <Grid px={{ xs: 1, md: 6, lg: 11 }} container sx={{ color: "white" }} >
                    <Grid item xs={12} sm={6} md={4} py={{ xs: 2, md: 5 }}>
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
                    <Grid item xs={12} sm={6} md={4} py={{ xs: 2, md: 5 }}>
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
                    </Grid> <Grid item xs={12} md={4} py={{ xs: 2, md: 5 }}>
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

            <Box px={{ xs: 1, md: 6, lg: 11 }}
                py={{ xs: 2, md: 6 }}
                sx={{ display: "flex", flexWrap: 'wrap' }}
            >
                <Box pr={3} mb={{ xs: 3 }} sx={{ width: { xs: "100%", sm: "50%", md: "33.33%", lg: "20%" } }}>
                    <Typography fontWeight={900} sx={{ fontSize: "30px" }}>AVONE</Typography>
                    <Typography sx={{ fontSize: "13px", marginBottom: "12px" }}> 55 Gallaxy Enque, 2568 steet, 23568 NY</Typography>
                    <Typography sx={{ fontSize: "13px", marginBottom: "12px" }}> <b>Phone:</b> (440) 000 000 0000</Typography>
                    <Typography sx={{ fontSize: "13px", marginBottom: "12px" }}> <b>Email :</b> sales@yousite.com</Typography>
                    <Stack direction="row" spacing={1}>
                        <FaFacebookF style={{ cursor: "pointer" }} />
                        <TwitterIcon fontSize="small" sx={{ cursor: "pointer" }} />
                        <FaPinterestP style={{ cursor: "pointer" }} />
                        <InstagramIcon fontSize="small" sx={{ cursor: "pointer" }} />
                    </Stack>


                </Box>
                <Box pr={3} mb={{ xs: 3 }} sx={{ width: { xs: "100%", sm: "50%", md: "33.33%", lg: "20%" } }}>
                    <NavbarStyledHeading>INFORMATION</NavbarStyledHeading>

                    <NavbarStyledSubHeading >About us</NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Contact Us </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Career </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>My Account </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Orders and Returns </NavbarStyledSubHeading>
                </Box>
                <Box pr={3} mb={{ xs: 3 }} sx={{ width: { xs: "100%", sm: "50%", md: "33.33%", lg: "20%" } }}>
                    <NavbarStyledHeading>QUICK SHOP</NavbarStyledHeading>
                    <NavbarStyledSubHeading>Fashion </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Men </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Furniture </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Home Decor </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Shoes </NavbarStyledSubHeading>
                </Box>
                <Box pr={3} mb={{ xs: 3 }} sx={{ width: { xs: "100%", sm: "50%", md: "33.33%", lg: "20%" } }}>
                    <NavbarStyledHeading>CUSTOMER SERVICES</NavbarStyledHeading>
                    <NavbarStyledSubHeading>Help & FAQs </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Returns Policy </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Terms & Conditions </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Privacy Policy </NavbarStyledSubHeading>
                    <NavbarStyledSubHeading>Support Center </NavbarStyledSubHeading>
                </Box>
                <Box pr={3} mb={{ xs: 3 }} sx={{ width: { xs: "100%", sm: "50%", md: "33.33%", lg: "20%" } }}>
                    <NavbarStyledHeading>NEWSLETTER</NavbarStyledHeading>
                    <Typography sx={{ fontSize: "13px" }}>Enter your email to receive daily news and get 20% off coupon for all items.</Typography>
                    <TextField
                        sx={{ margin: "12px 0", display: "block" }}
                        label="Email Address"
                        id="outlined-size-small"
                        size="small"
                    />
                    <Button variant="contained" sx={{ borderRadius: 0, bgcolor: "black", color: "white", fontSize:"10px", "&:hover": { bgcolor: "black", } }}>subscribe</Button>
                </Box>
            </Box>

            <Box px={{ xs: 1, md: 6, lg: 11 }} sx={{ display: "flex", flexDirection: { xs: "column-reverse", md:"row" }, justifyContent: "space-between", alignItems: "center" }}>
                <Box py={2}>
                    <Typography sx={{
                        fontSize: "13px",
                        cursor: "pointer",
                    }} >© 2021 Avone. All Rights Reserved. Ecommerce Software by Shopify  <br /> Designed by AdornThemes</Typography>
                </Box>

                <Stack py={2} direction='row' spacing={1}>
                    <img style={{ border: "1px solid grey", width: "30px", height: "20px", borderRadius: "3px" }} src={amazon} alt="amazon" srcset="" />
                    <img style={{ border: "1px solid grey", width: "30px", height: "20px", borderRadius: "3px" }} src={googlepay} alt="googlepay" srcset="" />
                    <img style={{ border: "1px solid grey", width: "30px", height: "20px", borderRadius: "3px" }} src={mastercard} alt="mastercard" srcset="" />
                    <img style={{ border: "1px solid grey", width: "30px", height: "20px", borderRadius: "3px" }} src={pay} alt="pay" srcset="" />
                    <img style={{ border: "1px solid grey", width: "30px", height: "20px", borderRadius: "3px" }} src={payoneer} alt="payoneer" srcset="" />
                    <img style={{ border: "1px solid grey", width: "30px", height: "20px", borderRadius: "3px" }} src={skrill} alt="skrill" srcset="" />
                    <img style={{ border: "1px solid grey", width: "30px", height: "20px", borderRadius: "3px" }} src={snsmungpay} alt="snsmungpay" srcset="" />
                    <img style={{ border: "1px solid grey", width: "30px", height: "20px", borderRadius: "3px" }} src={visa} alt="visa" srcset="" />
                </Stack>

            </Box>
        </Box >
    )
}

export default SiteTwoFooter