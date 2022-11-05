import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebookF } from 'react-icons/fa';

const SiteOneFooter = () => {
    return (
        <Box px={3} pb={4} sx={{ backgroundColor: "black", color: "white" }}>
            <Grid container>
                <Grid item xs={12} md={6} lg={3}>
                    <Box pt={{ xs: 5, md: 7 }}>
                        <Typography sx={{ fontSize: "19px", marginBottom: "20px" }}>Company</Typography>

                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>About Us</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>We're Hiring</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Press Mentions</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Current Gallery Show</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Past Gallery Shows</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Artist & Designer Submissions</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Blog</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Events</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box pt={{ xs: 5, md: 7 }}>
                        <Typography sx={{ fontSize: "19px", marginBottom: "20px" }}>Customer Care</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Contact Us</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Customer Service</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Privacy Policy</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Don't sell my personal information</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>Log In</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Box pt={{ xs: 5, md: 7 }}>
                        <Typography sx={{ fontSize: "19px", marginBottom: "20px" }}>Contact</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>customerservice@raredevice.net</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc", cursor: "pointer", transition: "all .5s", "&:hover": { color: "white" } }}>415-863-3969</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc" }}>600 Divisadero St.</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc" }}>San Francisco California</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc" }}>94117 United States</Typography>
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
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc" }}>Monday to Saturday: 11am – 7pm</Typography>
                        <Typography sx={{ fontSize: "16px", marginBottom: "10px", color: "#fffc" }}>Sunday: 11am – 6pm</Typography>

                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ width: "100%", display: "flex", justifyContent: { xs: "center", md: "end" } }}>
                <Typography sx={{ fontSize: "12px" }} pr={5}>Ecommerce Software by Shopify </Typography>
                <Typography sx={{ fontSize: "12px" }}>© 2022, Rare Device </Typography>
            </Box>
        </Box>
    )
}

export default SiteOneFooter