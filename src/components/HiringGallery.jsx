import React from 'react'
import { Grid, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/system'

import hiring from '../images/hiringGallery/hiring.webp'
import gallery from '../images/hiringGallery/gallery.webp'
import { styled, createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
const HiringGallery = () => {
    const customTheme = createTheme({
        palette: {
            primary: {
                main: deepPurple[500],
            },
        },
    });

    //     const StyledAvatar = styled(Box)`
    //   ${({ theme }) => `
    //   cursor: pointer;
    //   background-color: ${theme.palette.primary.main};
    //   transition: ${theme.transitions.create(['background-color', 'transform'], {
    //         duration: theme.transitions.duration.standard,
    //     })};
    //   &:hover {
    //     background-color: black;
    //     transform: scale(1.3);
    //   }
    //   `}
    // `;
    return (
        <Box mb={5}>
            <Grid
                container
                justify="space-between"
                spacing={3}
            >
                <Grid item xs={12} md={6} sx={{ cursor: "pointer" }}>
                    <Box
                        pl={5} pb={5} sx={{
                            display: "flex", alignItems: "end",
                            minHeight: "360px", width: "100%",
                            background: `rgba(0,0,0,0.5) url(${hiring})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            // backgroundSize: "100% 100%",

                            "&:hover": {
                                backgroundBlendMode: "darken",
                            }
                        }}>
                        <Box>

                            <Typography sx={{ color: "white", fontSize: "30px", letterSpacing: 2 }}>We're Hiring!</Typography>
                            <Typography sx={{ color: "white", fontSize: "16px" }}>Click here to learn more.</Typography>
                        </Box>


                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    {/* <ThemeProvider theme={customTheme}> */}

                    <Box
                        pl={5} pb={5} sx={{
                            display: "flex", alignItems: "end",
                            minHeight: "360px", width: "100%",
                            background: `rgba(0,0,0,0.5) url(${gallery})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            cursor: "pointer",

                            "&:hover": {
                                backgroundBlendMode: "darken",
                            }
                        }}>
                        <Box>
                            <Typography sx={{ color: "white", fontSize: "30px", letterSpacing: 2 }}>We're Hiring!</Typography>
                            <Typography sx={{ color: "white", fontSize: "16px" }}>Click here to learn more.</Typography>
                        </Box>


                    </Box>
                    {/* </ThemeProvider> */}
                </Grid>


            </Grid>
        </Box >
    )
}

export default HiringGallery