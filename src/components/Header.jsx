import { Box, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "black",
                color: "white",
                height: "35px",
                px: 5,
            }}
        >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Typography sx={{ fontSize: "11px" }}> ORDER ONLINE OR CALL US (1800) 000 8008</Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Typography sx={{ fontSize: "11px", px: 1 }}>EXPLORE</Typography>

                <Typography sx={{ fontSize: "11px", px: 1, borderRight: 1, borderLeft: 1 }}>SUPPORT</Typography>
                <Typography sx={{ fontSize: "11px", px: 1 }}>OFFERS</Typography>

            </Box>
        </Box>
    )
}

export default Header