import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Stack, } from '@mui/system';
import { Typography, Button } from '@mui/material';
import capgirl from '../images/GridShoppingImages/capgirl.webp';
import man from '../images/GridShoppingImages/man.webp';
import accesories from '../images/GridShoppingImages/accesories.webp';
import denim from '../images/GridShoppingImages/denim.webp';



export default function GridImagesList() {
    return (
        <Box py={2}>
            <ImageList sx={{
                width: '100%', height: "100%",
                columnCount: {
                    xs: '1 !important',
                    md: '2 !important',
                  
                },
            }} variant="masonry" gap={20}>

                <ImageListItem sx={{
                    width: "100%",
                    height: "100%0",
                    overflow: "hidden",
                    "& :hover": {
                        cursor: "pointer",
                        "&.gridShoppingImage": {
                            transform: 'scale(1.1)'
                        }
                    }
                }}>
                    <img
                        className="gridShoppingImage"
                        style={{ transition: "all 1s" }}
                        src={capgirl}
                        loading="lazy"
                    />

                    <Box
                        p={2}
                        sx={{
                            background: "white",
                            textAlign: "center",
                            backgroud: "white",
                            position: 'absolute',
                            left: ' 50%',
                            right: 0,
                            bottom: "20px",
                            transform: 'translate(-50%)',
                        }}>
                        <Typography fontWeight={700} sx={{ fontSize: "14px" }}>WOMEN TOPS</Typography>
                        <Typography py={1} sx={{ fontSize: "14px" }}>From world's top designer </Typography>
                        <Button variant="contained" sx={{ borderRadius: 0, bgcolor: "black", color: "white", boxShadow: "0" }}>DISCOVER NOW</Button>
                    </Box>
                </ImageListItem>

                <ImageListItem sx={{
                    overflow: "hidden",
                    "& :hover": {
                        cursor: "pointer",
                        "&.gridShoppingImage": {
                            transform: 'scale(1.1)'
                        }
                    }
                }}>

                    <img
                        className="gridShoppingImage"
                        style={{ transition: "all 1s" }}
                        src={accesories}
                        loading="lazy"
                    />
                    <Box
                        p={2}
                        sx={{
                            background: "white",
                            textAlign: "center",
                            backgroud: "white",
                            position: 'absolute',
                            left: ' 50%',
                            right: 0,
                            bottom: "20px",
                            transform: 'translate(-50%)',
                        }}>
                        <Typography fontWeight={700} sx={{ fontSize: "14px" }}>ACCESSORIES</Typography>
                        <Typography py={1} sx={{ fontSize: "14px" }}> add finishing touch to your outfit  </Typography>
                        <Button variant="contained" sx={{ borderRadius: 0, bgcolor: "black", color: "white", boxShadow: "0" }}>Shop Now</Button>
                    </Box>
                </ImageListItem>
                <ImageListItem sx={{
                    overflow: "hidden",
                    "& :hover": {
                        cursor: "pointer",
                        "&.gridShoppingImage": {
                            transform: 'scale(1.1)'
                        }
                    }
                }}>
                    <img
                        className="gridShoppingImage"
                        style={{ transition: "all 1s" }}
                        src={man}
                        loading="lazy"
                    />
                    <Box
                        p={2}
                        sx={{
                            background: "white",
                            textAlign: "center",
                            backgroud: "white",
                            position: 'absolute',
                            left: ' 50%',
                            right: 0,
                            bottom: "20px",
                            transform: 'translate(-50%)',
                        }}>
                        <Typography fontWeight={700} sx={{ fontSize: "14px" }}>MEN SHIRTS</Typography>
                        <Typography py={1} sx={{ fontSize: "14px" }}> Up to 70% off on selected item </Typography>
                        <Button variant="contained" sx={{ borderRadius: 0, bgcolor: "black", color: "white", boxShadow: "0" }}>Shop Now</Button>
                    </Box>
                </ImageListItem>
                <ImageListItem sx={{
                    overflow: "hidden",
                    "& :hover": {
                        cursor: "pointer",
                        "&.gridShoppingImage": {
                            transform: 'scale(1.1)'
                        }
                    }
                }}>
                    <img
                        className="gridShoppingImage"
                        style={{ transition: "all 1s" }}
                        src={denim}
                        loading="lazy"
                    />
                    <Box
                        p={2}
                        sx={{
                            background: "white",
                            textAlign: "center",
                            backgroud: "white",
                            position: 'absolute',
                            left: ' 50%',
                            right: 0,
                            bottom: "20px",
                            transform: 'translate(-50%)',
                        }}>
                        <Typography fontWeight={700} sx={{ fontSize: "14px" }}>DENIM</Typography>
                        <Typography py={1} sx={{ fontSize: "14px" }}> Find your perfect outfit </Typography>
                        <Button variant="contained" sx={{ borderRadius: 0, bgcolor: "black", color: "white", boxShadow: "0" }}>Shop Now</Button>
                    </Box>
                </ImageListItem>
            </ImageList >
        </Box>
    );
}

