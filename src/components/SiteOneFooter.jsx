import React from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebookF } from 'react-icons/fa';

const SiteOneFooter = () => {

    const CommenFooterSubheadingNoHover = styled(Typography)({
        fontSize: "16px",
        marginBottom: "10px",
        color: "#fffc",
        fontWeight: "300"
    })

    const CommenFooterSubheadingHover = styled(Typography)({
        cursor: "pointer",
        transition: "all .5s",
        "&:hover": { color: "white" },
        fontSize: "16px",
        marginBottom: "10px",
        color: "#fffc",
        fontWeight: "300"
    })


    return (
        <Box px={3} pb={4} sx={{ backgroundColor: "black", color: "white" }} >
            <Grid container>
                <Grid item xs={12} md={6} lg={3}>
                    <Box pt={{ xs: 5, md: 7 }}>
                        <Typography sx={{ fontSize: "19px", marginBottom: "20px" }}>Company</Typography>

                        <CommenFooterSubheadingHover>About Us</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>We're Hiring</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Press Mentions</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Current Gallery Show</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Past Gallery Shows</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Artist & Designer Submissions</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Blog</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Events</CommenFooterSubheadingHover>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box pt={{ xs: 5, md: 7 }}>
                        <Typography sx={{ fontSize: "19px", marginBottom: "20px" }}>Customer Care</Typography>
                        <CommenFooterSubheadingHover>Contact Us</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Customer Service</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Privacy Policy</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Don't sell my personal information</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>Log In</CommenFooterSubheadingHover>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box pt={{ xs: 5, md: 7 }}>
                        <Typography sx={{ fontSize: "19px", marginBottom: "20px" }}>Contact</Typography>
                        <CommenFooterSubheadingHover>customerservice@raredevice.net</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingHover>415-863-3969</CommenFooterSubheadingHover>
                        <CommenFooterSubheadingNoHover>600 Divisadero St.</CommenFooterSubheadingNoHover>
                        <CommenFooterSubheadingNoHover>San Francisco California</CommenFooterSubheadingNoHover>
                        <CommenFooterSubheadingNoHover>94117 United States</CommenFooterSubheadingNoHover>
                        <Stack direction="row" spacing={2}>

                            <Avatar sx={{
                                bgcolor: "black", border: "1px solid #fffc", cursor: "pointer", transition: "all 0.5s", "&:hover": {
                                    borderColor: "red",

                                }
                            }}>
                                <FaFacebookF fontSize='small' sx={{ color: "#fffc", }} />
                            </Avatar>
                            <Avatar sx={{
                                bgcolor: "black", border: "1px solid #fffc", cursor: "pointer", transition: "all 0.5s", "&:hover": {
                                    borderColor: "red",

                                }
                            }}>
                                <TwitterIcon fontSize='small' sx={{ color: "#fffc", }} />
                            </Avatar>
                            <Avatar sx={{
                                bgcolor: "black", border: "1px solid #fffc", cursor: "pointer", transition: "all 0.5s", "&:hover": {
                                    borderColor: "red",

                                }
                            }}>
                                <InstagramIcon fontSize='small' sx={{ color: "#fffc", }} />
                            </Avatar>
                        </Stack>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box pt={{ xs: 5, md: 7 }}>
                        <Typography sx={{ fontSize: "19px", marginBottom: "20px" }}>Store Hours</Typography>
                        <CommenFooterSubheadingNoHover>Monday to Saturday: 11am – 7pm</CommenFooterSubheadingNoHover>
                        <CommenFooterSubheadingNoHover>Sunday: 11am – 6pm</CommenFooterSubheadingNoHover>

                    </Box>
                </Grid>
            </Grid>
            <Box mt={5} sx={{

                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", md: "end" },
                flexDirection: { xs: "column", sm: "row" },
                alignItems:"center",


            }}>
                <Typography sx={{ fontSize: "15px", fontWeight: "300" }} pr={{xs:0, sm:5}}>Ecommerce Software by Shopify </Typography>
                <Typography sx={{ fontSize: "15px", fontWeight: "300" }}>© 2022, Rare Device </Typography>
            </Box>
        </Box >
    )
}

export default SiteOneFooter