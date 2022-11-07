

import React, { useState } from 'react'
import { Typography, Box, styled, Rating, Avatar, Tooltip, ImageList, ImageListItem, Button } from '@mui/material'
import { Stack } from '@mui/system';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import Slider from "react-slick";

import whitebracelet1 from '../images/newArrivals/whitebracelet1.webp';
import whitebracelet2 from '../images/newArrivals/whitebracelet2.webp';

import blackbracelet1 from '../images/newArrivals/blackbracelet1.webp';
import blackbracelet2 from '../images/newArrivals/blackbracelet2.webp';

import greyladiesbag from '../images/newArrivals/greyladiesbag.jpg';
import blackladiesbag from '../images/newArrivals/blackladiesbag.jpg';

import ladieswhitedress1 from '../images/newArrivals/ladieswhitedress1.jpg';
import ladieswhitedress2 from '../images/newArrivals/ladieswhitedress2.jpg';

import capblack from '../images/newArrivals/capblack.jpg';
import cappink from '../images/newArrivals/cappink.jpg';

import whitedresslady from '../images/newArrivals/whitedresslady.webp';
import blackdresslady from '../images/newArrivals/blackdresslady.webp';

const StyledSliderBox = styled(Box)({
    margin: "0 8px",
    position: "relative"
});

function SampleNextArrow({ onClick }) {

    return (
        <Box
            sx={{
                position: 'absolute',
                zIndex: '1',
                cursor: 'pointer',
                right: {
                    xs: 0, md: "-30px", lg: "-50px"
                },
                top: "50%"
            }}
            onClick={onClick} >
            <ArrowForwardIosIcon />
        </Box >

    );
}

function SamplePrevArrow({ onClick }) {

    return (
        <Box
            sx={{
                position: 'absolute',
                zIndex: '1',
                cursor: 'pointer',
                left: {
                    xs: 0, md: "-30px", lg: "-50px"
                },
                top: "50%"
            }}
            className="arrow arrow-left" onClick={onClick}>
            <ArrowBackIosIcon />
        </Box>

    );
}

const GetGrip = () => {

    const [imgOne, setImgOne] = useState(whitebracelet1);
    const [imgTwo, setImgTwo] = useState(blackbracelet1);
    const [imgThree, setImgThree] = useState(greyladiesbag);
    const [imgFour, setImgFour] = useState(ladieswhitedress1);
    const [imgFive, setImgFive] = useState(capblack);


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    };
    return (
        <Box>
            <Box my={2}>
                <Typography align={'center'} fontWeight={700} sx={{ fontSize: "18px" }}>
                    NEW ARRIVALS
                </Typography>
                <Typography align={'center'} sx={{ fontSize: "13px" }}>
                    Shop our new arrivals from established brands

                </Typography>

                <Slider {...settings} style={{ margin: "30px 0" }}>
                    <div >
                        <StyledSliderBox
                            onMouseOver={() => setImgOne(whitebracelet2)} onMouseOut={() => setImgOne(whitebracelet1)}
                            sx={{
                                cursor: "pointer", "& :hover": {
                                    "& .overlay": {
                                        height: '15%'
                                    }
                                }
                            }}  >
                            <Box sx={{ position: "relative" }}>
                                <img src={imgOne} alt="" srcset="" style={{ width: "100%", }}

                                />

                                <Stack className="overlay" direction="row" spacing={1} pl={5}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        overflow: 'hidden',
                                        width: "100%",
                                        height: 0,
                                        transition: 'all .3s ',
                                    }}
                                >


                                    <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                        <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
                                    </Avatar>
                                    <Tooltip title="Quick Shop " arrow placement="top" >

                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded"

                                        >
                                            <ShoppingCartCheckoutIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                    <Tooltip title="Quick View " arrow placement="top" >

                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                            <ZoomInIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                </Stack>

                            </Box>
                            <Typography align="center" pt={1} sx={{ fontSize: "12px" }}>Backpack With Contrast Bow</Typography>
                            <Typography align="center" pt={1} sx={{ fontSize: "14px" }}>$70.00</Typography>
                            <Box align="center" pt={1} >
                                <Rating name="no-value" value={null} size="small" />
                            </Box>

                        </StyledSliderBox>
                    </div>

                    <div >

                        <StyledSliderBox
                            onMouseOver={() => setImgTwo(blackbracelet2)} onMouseOut={() => setImgTwo(blackbracelet1)}
                            sx={{
                                cursor: "pointer", "& :hover": {
                                    "& .overlay": {
                                        height: '15%'
                                    }
                                }
                            }}  >
                            <Box sx={{ position: "relative" }}>
                                <img src={imgTwo} alt="" srcset="" style={{ width: "100%", }}

                                />

                                <Stack className="overlay" direction="row" spacing={1} pl={5}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        overflow: 'hidden',
                                        width: "100%",
                                        height: 0,
                                        transition: 'all .3s ',
                                    }}
                                >


                                    <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                        <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
                                    </Avatar>
                                    <Tooltip title="Quick Shop " arrow placement="top" >
                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded"
                                        >
                                            <ShoppingCartCheckoutIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                    <Tooltip title="Quick View " arrow placement="top" >

                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                            <ZoomInIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                </Stack>

                            </Box>
                            <Typography align="center" pt={1} sx={{ fontSize: "12px" }}>Backpack With Contrast Bow</Typography>
                            <Typography align="center" pt={1} sx={{ fontSize: "14px" }}>$70.00</Typography>
                            <Box align="center" pt={1} >
                                <Rating name="no-value" value={null} size="small" />
                            </Box>

                        </StyledSliderBox>
                    </div>
                    <div >

                        <StyledSliderBox
                            onMouseOver={() => setImgThree(blackladiesbag)} onMouseOut={() => setImgThree(greyladiesbag)}
                            sx={{
                                cursor: "pointer", "& :hover": {
                                    "& .overlay": {
                                        height: '15%'
                                    }
                                }
                            }}  >
                            <Box sx={{ position: "relative" }}>
                                <img src={imgThree} alt="" srcset="" style={{ width: "100%", }}

                                />

                                <Stack className="overlay" direction="row" spacing={1} pl={5}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        overflow: 'hidden',
                                        width: "100%",
                                        height: 0,
                                        transition: 'all .3s ',
                                    }}
                                >


                                    <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                        <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
                                    </Avatar>
                                    <Tooltip title="Quick Shop " arrow placement="top" >
                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded"
                                        >
                                            <ShoppingCartCheckoutIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                    <Tooltip title="Quick View " arrow placement="top" >

                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                            <ZoomInIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                </Stack>

                            </Box>
                            <Typography align="center" pt={1} sx={{ fontSize: "12px" }}>Backpack With Contrast Bow</Typography>
                            <Typography align="center" pt={1} sx={{ fontSize: "14px" }}>$70.00</Typography>
                            <Box align="center" pt={1} >
                                <Rating name="no-value" value={null} size="small" />
                            </Box>

                        </StyledSliderBox>
                    </div>
                    <div >

                        <StyledSliderBox
                            onMouseOver={() => setImgFour(ladieswhitedress2)} onMouseOut={() => setImgFour(ladieswhitedress1)}
                            sx={{
                                cursor: "pointer", "& :hover": {
                                    "& .overlay": {
                                        height: '15%'
                                    }
                                }
                            }}  >
                            <Box sx={{ position: "relative" }}>
                                <img src={imgFour} alt="" srcset="" style={{ width: "100%", }}

                                />

                                <Stack className="overlay" direction="row" spacing={1} pl={5}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        overflow: 'hidden',
                                        width: "100%",
                                        height: 0,
                                        transition: 'all .3s ',
                                    }}
                                >


                                    <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                        <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
                                    </Avatar>
                                    <Tooltip title="Quick Shop " arrow placement="top" >
                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded"
                                        >
                                            <ShoppingCartCheckoutIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                    <Tooltip title="Quick View " arrow placement="top" >

                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                            <ZoomInIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                </Stack>

                            </Box>
                            <Typography align="center" pt={1} sx={{ fontSize: "12px" }}>Backpack With Contrast Bow</Typography>
                            <Typography align="center" pt={1} sx={{ fontSize: "14px" }}>$70.00</Typography>
                            <Box align="center" pt={1} >
                                <Rating name="no-value" value={null} size="small" />
                            </Box>

                        </StyledSliderBox>
                    </div>
                    <div >

                        <StyledSliderBox
                            onMouseOver={() => setImgFive(cappink)} onMouseOut={() => setImgFive(capblack)}
                            sx={{
                                cursor: "pointer", "& :hover": {
                                    "& .overlay": {
                                        height: '15%'
                                    }
                                }
                            }}  >
                            <Box sx={{ position: "relative" }}>
                                <img src={imgFive} alt="" srcset="" style={{ width: "100%", }}

                                />

                                <Stack className="overlay" direction="row" spacing={1} pl={5}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        overflow: 'hidden',
                                        width: "100%",
                                        height: 0,
                                        transition: 'all .3s ',
                                    }}
                                >


                                    <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                        <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
                                    </Avatar>
                                    <Tooltip title="Quick Shop " arrow placement="top" >
                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded"
                                        >
                                            <ShoppingCartCheckoutIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                    <Tooltip title="Quick View " arrow placement="top" >

                                        <Avatar sx={{ bgcolor: "black" }} variant="rounded">
                                            <ZoomInIcon sx={{ cursor: "pointer", }} />
                                        </Avatar>
                                    </Tooltip>

                                </Stack>

                            </Box>
                            <Typography align="center" pt={1} sx={{ fontSize: "12px" }}>Backpack With Contrast Bow</Typography>
                            <Typography align="center" pt={1} sx={{ fontSize: "14px" }}>$70.00</Typography>
                            <Box align="center" pt={1} >
                                <Rating name="no-value" value={null} size="small" />
                            </Box>

                        </StyledSliderBox>
                    </div>


                </Slider>

            </Box>

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
                            style={{ transition: "all .5s" }}
                            src={whitedresslady}
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
                            <Typography fontWeight={700} mb={1} sx={{

                                fontSize: { xs: "12px", sm: "16px" },

                                lineHeight: "20px",
                            }}>  FIND THE BEST COLLECTION AROUND THE WORLD</Typography>

                            <Button variant="contained" sx={{
                                borderRadius: 0, bgcolor: "black", color: "white", boxShadow: "0",
                                fontSize: { xs: "10px", sm: "0.875rem" }
                            }}>shop now</Button>
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
                            style={{ transition: "all .5s" }}
                            src={blackdresslady}
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
                            <Typography fontWeight={700} mb={1} sx={{
                                fontSize: { xs: "12px", sm: "16px" },

                                lineHeight: "20px",
                            }}>  AWESOME T-SHIRTS, CROP TOPS AND MORE...</Typography>
                            <Button variant="contained" sx={{
                                borderRadius: 0, bgcolor: "black", color: "white", boxShadow: "0",
                                fontSize: { xs: "10px", sm: "0.875rem" }
                            }}>VIEW COLLECTION</Button>
                        </Box>
                    </ImageListItem>


                </ImageList >
            </Box>

        </Box >
    )
}

export default GetGrip
