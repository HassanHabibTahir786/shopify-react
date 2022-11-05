import React, { useState } from 'react'
import { Typography, Box, styled } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { grey } from '@mui/material/colors';

import Slider from "react-slick";

import greenCatcher1 from '../images/getGrip/greenCatcher1.webp'
import greenCatcher2 from '../images/getGrip/greenCatcher2.webp'
import pinkCatcher1 from '../images/getGrip/pinkCatcher1.webp'
import pinkCatcher2 from '../images/getGrip/pinkCatcher2.webp'
import pinkwhiteCatcher1 from '../images/getGrip/pinkwhiteCatcher1.webp'
import pinkwhiteCatcher2 from '../images/getGrip/pinkwhiteCatcher2.webp'
import whiteCatcher1 from '../images/getGrip/whiteCatcher1.webp'
import whiteCatcher2 from '../images/getGrip/whiteCatcher2.webp'


const StyledSliderBox = styled(Box)({
    margin: "0 8px",
    position: "relative"
});
const SliderNewBox = styled(Box)({
    position: "absolute",
    right: "-6px",
    top: "10px",
    backgroundColor: "black",
    color: "white",

});

const GetGrip = () => {

    const [imgOne, setImgOne] = useState(greenCatcher1);
    const [imgTwo, setImgTwo] = useState(pinkwhiteCatcher1);
    const [imgThree, setImgThree] = useState(pinkCatcher1);
    const [imgFour, setImgFour] = useState(whiteCatcher1);

    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                // from 900 to 1024px

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            // from 600 to 900px
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                // from 0 to 600px
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
        ]
    };
    return (
        <Box>
            <Box my={2}>
                <Typography mt={5} mb={2} align={'center'} sx={{ fontSize: "30px" }}>
                    Get a Grip!
                </Typography>

                <Slider {...settings}>
                    <div >
                        <StyledSliderBox  >
                            <SliderNewBox>
                                <Typography sx={{ padding: '7px 20px' }}>New</Typography>

                            </SliderNewBox>

                            <img src={imgOne} alt="" srcset="" style={{ width: "100%", cursor: "pointer" }} onMouseOver={() => setImgOne(greenCatcher2)} onMouseOut={() => setImgOne(greenCatcher1)} />
                            <Typography align="center" sx={{ fontSize: "22px" }}>Tiger's Eye Hair Claw - Green</Typography>
                            <Typography align="center" sx={{ fontSize: "20px" }}>$12.00</Typography>
                        </StyledSliderBox>
                    </div>

                    <div >
                        <StyledSliderBox>
                            <SliderNewBox>
                                <Typography sx={{ padding: '7px 20px' }}>New</Typography>

                            </SliderNewBox>
                            <img src={imgTwo} alt="" srcset="" style={{ width: "100%", cursor: "pointer" }} onMouseOver={() => setImgTwo(pinkwhiteCatcher2)} onMouseOut={() => setImgTwo(pinkwhiteCatcher1)} />
                            <Typography align="center" sx={{ fontSize: "22px" }}>Tiger's Eye Hair Claw - Green</Typography>
                            <Typography align="center" sx={{ fontSize: "20px" }}>$12.00</Typography>
                        </StyledSliderBox>
                    </div>
                    <div >
                        <StyledSliderBox>
                            <SliderNewBox>
                                <Typography sx={{ padding: '7px 20px' }}>New</Typography>

                            </SliderNewBox>
                            <img src={imgThree} alt="" srcset="" style={{ width: "100%" ,cursor:"pointer" }} onMouseOver={() => setImgThree(pinkCatcher2)} onMouseOut={() => setImgThree(pinkCatcher1)} />
                            <Typography align="center" sx={{ fontSize: "22px" }}>Tiger's Eye Hair Claw - Green</Typography>
                            <Typography align="center" sx={{ fontSize: "20px" }}>$12.00</Typography>
                        </StyledSliderBox>
                    </div>
                    <div >
                        <StyledSliderBox>
                            <img src={imgFour} alt="" srcset="" style={{ width: "100%", cursor: "pointer" }} onMouseOver={() => setImgFour(whiteCatcher2)} onMouseOut={() => setImgFour(whiteCatcher1)} />
                            <Typography align="center" sx={{ fontSize: "22px" }}>Tiger's Eye Hair Claw - Green</Typography>
                            <Typography align="center" sx={{ fontSize: "20px" }}>$12.00</Typography>
                        </StyledSliderBox>
                    </div>


                </Slider>

            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography my={5} sx={{
                    fontSize: "17px", cursor: "pointer", display: "flex",
                    transition:"all .5s",
                    "&:hover": {
                        color: grey[700]
                    }
                }}>
                    Shop Hair Claws, Clips and Pins
                    <KeyboardArrowRightIcon />
                </Typography>
            </Box>
        </Box >
    )
}

export default GetGrip