
import { useState } from 'react';

import { Box, Typography, Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Slider from "react-slick";

// import logo1 from '../images/logos/logo1.png';
// import logo2 from '../images/logos/logo2.png';
// import logo3 from '../images/logos/logo3.png';
// import logo4 from '../images/logos/logo4.png';
// import logo5 from '../images/logos/logo5.png';
import slider1 from '../images/slider/slider1.jpg'
import slider2 from '../images/slider/slider2.jpg'
import slider3 from '../images/slider/slider3.jpg'

import { grey } from '@mui/material/colors';


const images = [slider1, slider2, slider3,];


const CommenBtnStyled = {
    borderRadius: '10px',
    boxShadow: "0 0 5px 3px #ccc",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: '40px',
    height: '40px',
    position: 'absolute',
    zIndex: '1',
    cursor: 'pointer',
}


function SampleNextArrow({ onClick }) {

    return (
        <Box
            sx={{
                ...CommenBtnStyled,


                right: '20px',
                top: {
                    xs: '35vh',
                    // md: "50px"
                },

            }}
            onClick={onClick} >
            <KeyboardArrowRightIcon />
        </Box >

    );
}

function SamplePrevArrow({ onClick }) {

    return (
        <Box
            sx={{
                ...CommenBtnStyled,
                left: "20px",
                top: {
                    xs: '35vh',
                    // md: "50px"
                },
            }}
            className="arrow arrow-left" onClick={onClick}>
            <KeyboardArrowLeftIcon />
        </Box>

    );
}

function CrossStore() {
    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        // infinite: true,
        // slidesToShow: 5,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // slidesToScroll: 1,
        // centerPadding: 0,
        // beforeChange: (current, next) => setSlideIndex(next),
        // centerMode: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,

        // responsive: [
        //     {
        //         breakpoint: 1536,
        //         settings: {
        //             slidesToShow: 5,
        //             slidesToScroll: 1,
        //             infinite: true,

        //         }
        //     },
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 5,
        //             slidesToScroll: 1,
        //             infinite: true,

        //         }
        //     },
        //     {
        //         breakpoint: 900,
        //         settings: {
        //             slidesToShow: 5,
        //             slidesToScroll: 1,
        //             infinite: true,

        //         }
        //     },

        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //             infinite: true,

        //         }
        //     },


        // ]

        // dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        pauseOnHover: false
    };


    return (
        <Box >



            <Slider {...settings}  >
                {images.map((image, ind) => (

                    <Box >
                        <Box sx={{
                            backgroundImage: `url(${image})`, backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '525px',
                            display: "flex",
                            paddingLeft: "100px",
                            alignItems: "center"
                        }}>
                            <Box>
                                <Typography variant="h3" fontWeight={700} sx={{ color: ind === 0 ? "#4e4c4c" : ind === 1 ? "black" : "white" }}>
                                    Bloctech Solutions
                                </Typography>
                                <Typography my={3} variant="h6" sx={{ maxWidth: "700px", color: ind === 0 ? "white" : ind === 1 ? "black" : "white" }} >
                                    BlocTech Solutions, a Pakistan-based leading software development company with years of experience, is nurturing innovative practices in Web 3.0 and inspiring product companies and non-IT enterprises to build reliable blockchain solutions.
                                </Typography>
                                <Button variant="contained" color="secondary" >Contact Us</Button>
                            </Box>

                        </Box>
                    </Box>
                ))}

            </Slider>

        </Box >

    );
}

export default CrossStore;



