import { Box, Stack, Grid, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import rare from '../images/rareDevice/rare.png'

import React from 'react'

const BuyGiftCard = () => {
    return (
        <Box my={{xs:2, md:10}} >
            <Grid container  sx={{ alignItems: "center", flexDirection:{xs:'column-reverse', md:"row"} }}>
                <Grid item xs={12} md={6}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        spacing={{xs:0 ,md:2}}
                        sx={{ pl:{ xs: 0, md: 10 } }}
                    >
                        <Typography sx={{ fontSize: "24px" }}>Buy a Gift Card</Typography>
                        <Typography pr={{xs:0, md:5}} sx={{ fontSize: "16px", lineHeight: 2 }}>Shopping for someone else but not sure what to give them? Give them the gift of choice with a Rare Device gift card.</Typography>

                        <Box sx={{ display: "flex", justifyContent: "end" }}>
                            <Box sx={{ cursor: "pointer", width: "150px", height: "50px", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ color: "white", fontSize: "16px", display: "flex", }}>Buy Now   <KeyboardArrowRightIcon /></Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box >
                        <img src={rare} alt="rare-img" style={{ width: "100%" }} />
                    </Box>
                </Grid>

            </Grid>
        </Box >
    )
}

export default BuyGiftCard