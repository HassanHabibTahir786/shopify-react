

import * as React from 'react';
import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';

import img1 from '../images/freshFromOurBlog/img1.webp'
import img2 from '../images/freshFromOurBlog/img2.webp'
import img3 from '../images/freshFromOurBlog/img3.webp'

const itemData = [
    {
        img: img1,
        title: 'Ensuring Customer Success',
        date: 'April 25, 2020',
    },
    {
        img: img2,
        title: 'We can make your business shine!',
        date: 'April 25, 2020',
    },
    {
        img: img3,
        title: 'Our development is your success',
        date: 'April 25, 2020',
    },

];

export default function FreshFromOurBlog() {
    return (
        <Box pt={5}>
            <Typography align={'center'} fontWeight={700} sx={{ fontSize: "18px" }}>
                FRESH FROM OUR BLOG
            </Typography>
            <Typography align={'center'} mb={3} sx={{ fontSize: "13px" }}>
                You are going to love this amazing shopify theme.

            </Typography>
            <ImageList
                variant="masonry"
                gap={20}
                sx={{
                    width: '100%', height: "100%",
                    columnCount: {
                        xs: '1 !important',
                        md: '3 !important',

                    },
                }}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>

                        <img

                            className='myimg'
                            onMouseOver="this.style.opacity='0.5"
                            style={{ cursor: "pointer" }}
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />

                        <Box align="center">
                            <Typography mt={2} fontWeight={700} sx={{transition:".5s ease-in-out" , cursor: "pointer", fontSize: "15px", "&:hover": { color: "red" } }}> {item.title}  </Typography>
                            <Typography sx={{ fontSize: "12px" }}>  April 25, 2020  </Typography>
                        </Box>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}


