import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

import hiring from '../images/hiringGallery/hiring.webp'
import gallery from '../images/hiringGallery/gallery.webp'
const HiringGallery = () => {

    return (
        <Box mb={5} sx={{ position: "relative" }}>
            <Grid
                container
                justify="space-between"
                spacing={3}
            >
                <Grid item xs={12} md={6} >

                    <Box sx={{
                        position: "relative",
                        height: "360px",
                        width: "100%",
                        "& :hover": {
                            "&.overlay": {
                                opacity: 0.4
                            }
                        }
                    }}>
                        <img src={hiring} alt="" style={{ width: "100%", height: "100%" }} />
                        <Box className="content" sx={{
                            position: "absolute",
                            bottom: "10%",
                            left: "10%",
                            color: "white",
                        }}>
                            <Box>
                                <Typography sx={{ fontSize: "30px", letterSpacing: 2 }}>We're Hiring!</Typography>
                                <Typography sx={{ fontSize: "16px" }}>Click here to learn more.</Typography>
                            </Box>
                        </Box>
                        <Box className="overlay" sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            opacity: 0.1,
                            transition: "opacity 0.4s ease-in-out",
                            background: "black",
                            cursor: "pointer",

                        }}>
                            <Box className="content" sx={{
                                position: "absolute",
                                bottom: "10%",
                                left: "10%",
                                color: "white",
                            }}>
                                <Box>
                                    <Typography sx={{ fontSize: "30px", letterSpacing: 2 }}>We're Hiring!</Typography>
                                    <Typography sx={{ fontSize: "16px" }}>Click here to learn more.</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} >

                    <Box sx={{
                        position: "relative",
                        height: "360px",
                        width: "100%",
                        "& :hover": {
                            "&.overlay": {
                                opacity: 0.4
                            }
                        }
                    }}>
                        <img src={gallery} alt="" style={{ width: "100%", height: "100%" }} />
                        <Box className="content" sx={{
                            position: "absolute",
                            bottom: "10%",
                            left: "10%",
                            color: "white",
                        }}>
                            <Box>
                                <Typography sx={{ fontSize: "30px", letterSpacing: 2 }}>In the Gallery</Typography>
                                <Typography sx={{ fontSize: "16px" }}>Gather by Risa Iwasaki Culbertson</Typography>
                            </Box>
                        </Box>
                        <Box className="overlay" sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            opacity: 0.1,
                            transition: "opacity 0.4s ease-in-out",
                            background: "black",
                            cursor: "pointer",

                        }}>
                            <Box className="content" sx={{
                                position: "absolute",
                                bottom: "10%",
                                left: "10%",
                                color: "white",
                            }}>
                                <Box>
                                    <Typography sx={{ fontSize: "30px", letterSpacing: 2 }}>In the Gallery</Typography>
                                    <Typography sx={{ fontSize: "16px" }}>Gather by Risa Iwasaki Culbertson</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Box >
    )
}

export default HiringGallery