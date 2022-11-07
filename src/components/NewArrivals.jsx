// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';

// import { grey } from '@mui/material/colors';


// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// import Slider from "react-slick";

// import whitebracelet1 from '../images/newArrivals/whitebracelet1.webp';
// import whitebracelet2 from '../images/newArrivals/whitebracelet2.webp';

// import blackbracelet1 from '../images/newArrivals/blackbracelet1.webp';
// import blackbracelet2 from '../images/newArrivals/blackbracelet2.webp';

// import greyladiesbag from '../images/newArrivals/greyladiesbag.jpg';
// import blackladiesbag from '../images/newArrivals/blackladiesbag.jpg';

// import ladieswhitedress1 from '../images/newArrivals/ladieswhitedress1.jpg';
// import ladieswhitedress2 from '../images/newArrivals/ladieswhitedress2.jpg';


// // const NewArrivals = () => {
// //     return (
// //         <Box>
// //             <Typography align="center" fontWeight={700} sx={{ fontSize: "22px" }}>NEW ARRIVALS</Typography>
// //             <Typography align="center" sx={{ fontSize: "13px" }}>  Shop our new arrivals from established brands</Typography>

// //         </Box>
// //     )
// // }

// // export default NewArrivals


// const logos = [whitebracelet1, whitebracelet1, whitebracelet1, whitebracelet1, whitebracelet1, whitebracelet1];

// const CommenBtnStyled = {
//     fontSize: '30px',
//     padding: '5px',
//     borderRadius: '50%',
//     boxShadow: "0 0 5px 3px #ccc",
//     display: 'flex',
//     justifyContent: "center",
//     alignItems: "center",
//     width: '20px',
//     height: '20px',
//     position: 'absolute',
//     zIndex: '1',
//     cursor: 'pointer',
// }


// function SampleNextArrow({ onClick }) {

//     return (
//         <Box
//             sx={{
//                 ...CommenBtnStyled,


//                 right: '-50px',
//                 top: {
//                     xs: '40px',
//                     md: "50px"
//                 },

//             }}
//             onClick={onClick} >
//             <KeyboardArrowRightIcon />
//         </Box >

//     );
// }

// function SamplePrevArrow({ onClick }) {

//     return (
//         <Box
//             sx={{
//                 ...CommenBtnStyled,
//                 left: "-50px",
//                 top: {
//                     xs: '40px',
//                     md: "50px"
//                 },
//             }}
//             className="arrow arrow-left" onClick={onClick}>
//             <KeyboardArrowLeftIcon />
//         </Box>

//     );
// }

// function CrossStore() {

//     const settings = {
//         slidesToShow: 5,
//         centerPadding: 0,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//     };


//     return (
//         <Box my={10}>

//             <Slider {...settings} style={{
//             }} >
//                 {
//                     logos.map((logo, index) => (
//                         <Box
//                             sx={{
//                                 bgcolor: grey[200],
//                                 p: { xs: 1, md: 2 },
//                                 width: { xs: "50px" },
//                                 height: { xs: "100px", md: '120px' },
//                                 border: '1px solid ',
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             }}
//                             key={index} >
//                             <img src={logo} alt="" style={{ width: "100%", height: "100%" }} />
//                         </Box>
//                     ))
//                 }
//             </Slider>

//         </Box >

//     );
// }

// export default CrossStore;



import React, { useState } from 'react'
import { Typography, Box, styled, Rating, Avatar, Tooltip } from '@mui/material'
import { Stack } from '@mui/system';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
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
                right: '-50px',
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
                left: "-50px",
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
        // current
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
                <Typography  align={'center'} fontWeight={700} sx={{ fontSize: "18px" }}>
                    NEW ARRIVALS
                </Typography>
                <Typography  align={'center'}  sx={{ fontSize: "13px" }}>
                    Shop our new arrivals from established brands

                </Typography>

                <Slider {...settings} style={{margin:"30px 0"}}>
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

        </Box >
    )
}

export default GetGrip
