import { Box, Typography, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react'

const SignUpNewsletter = () => {
    return (
        <Box my={{xs:1, md:3}} sx={{ display: "flex", justifyContent: "center", }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Typography align="center" sx={{ fontSize: "30px" }}> Sign-Up for Our Newsletter!</Typography>
                <Typography align="center" sx={{ fontSize: "16px", color:grey[700] }}> Subscribe to our newsletter for early access to online sales and promotions</Typography>
                <Box  sx={{cursor:"pointer" , width:{xs:"100%", md:"600px"}, height:"50px", backgroundColor:"black" , display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Typography   sx={{color:"white", fontSize:"19px"}}> Sign-Up Here</Typography>
                </Box>
        </Stack>
        </Box >  
    )
}

export default SignUpNewsletter