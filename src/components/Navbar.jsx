import React, { useState } from "react";
import {
    AppBar,
    Box,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import {
    Menu as MenuIcon,
} from "@mui/icons-material/";
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    });
    const SocialBox = styled(Box)({
        display: "flex",
        gap: 15,
    });
 
    const MenuItems = [
        { Name: "HOME", Link: "/" },
        { Name: "SHOP", Link: "#" },
        { Name: "FEATURES", Link: "#" },
        { Name: "LOOKBOOK", Link: "#" },
        { Name: "PAGES", Link: "#" },
        { Name: "BLOG", Link: "#" },
    ];
    const [open, SetOpen] = useState(false);
    return (
        <AppBar
            sx={{
                px: { xs: 0, md: 1, lg: 2 }
            }}
            position={"static"} >
            <StyledToolbar>

                <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", }}>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SearchIcon sx={{ cursor: "pointer" }} />

                </Box>
                <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: [700], display: { xs: "none", md: "flex" } }}>
                        BLOCTECH
                    </Typography>
                    <Typography sx={{ fontSize: "30px", fontWeight: [700], display: { xs: "flex", md: "none" } }}>
                        BLOCTECH
                    </Typography>
                  
                </Box>

                <Box sx={{ display: "flex" }}>



                    <Box sx={{ display: { xs: "none", sm: "none", md: "flex", }, marginRight: { md: 2, lg: 6 }, alignItems: "center", gap: { md: 2, lg: 4 } }}>

                        {MenuItems.map((item) => (

                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                {item.Name}
                                <ExpandMoreIcon />

                            </Typography>
                        ))}
                    </Box>
                    <SocialBox>
                        <SearchIcon sx={{ display: { xs: "none", md: "flex", cursor: "pointer", fontSize: "20px" } }} />
                        <SettingsIcon sx={{ cursor: "pointer", fontSize: "20px" }} />
                        <FavoriteBorderIcon sx={{ display: { xs: "none", md: "flex", cursor: "pointer", fontSize: "20px" } }} />
                        <Badge color="secondary" badgeContent={0} showZero sx={{ cursor: "pointer", fontSize: "20px" }}>
                            <ShoppingBagIcon />
                        </Badge>
                    </SocialBox>
                </Box>


                {/* <SearchBox>
                    <InputBase placeholder="Search ..." sx={{ color: "white" }} />
                    <MenuIcon
                        sx={{
                            color: "white",
                            display: { xs: "block", sm: "block", md: "none" },
                        }}
                        onClick={() => SetOpen(!open)}
                    />
                </SearchBox> */}
            </StyledToolbar>
            {/* <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => SetOpen(!open)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <Box sx={{ width: 350, height: "90vh" }}>
                    {MenuItems.map((item) => (
                        <MenuItem
                            sx={{
                                cursor: "pointer",
                                fontSize: "14px",
                            }}
                        >
                            {item.Name}
                        </MenuItem>
                    ))}
                </Box>
            </Menu> */}
        </AppBar >
    );
};

export default Navbar;