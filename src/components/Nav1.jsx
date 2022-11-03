import React, { useState } from "react";
import {
    AppBar,
    Box,
    styled,
    Toolbar,
    Typography,
    Paper,
    MenuList,
    MenuItem,
    ListItemText

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
import TemporaryDrawer from "./Drawer";



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
    const [home, setHome] = useState(false);
    const [shop, setShop] = useState(false);
    const [feature, setFeature] = useState(false);
    const [lookBook, setLookBook] = useState(false);
    const [pages, setPages] = useState(false);
    const [blog, setBlog] = useState(false);

    


    // console.log(manue);
    return (
        <AppBar
            sx={{
                px: { xs: 0, md: 1, lg: 2 }
            }}
            position={"static"} >
            <StyledToolbar>
                {/* <TemporaryDrawer /> */}


                <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", }}>
                    <TemporaryDrawer />
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



                        <Box
                            onMouseOver={() => setHome(true)}
                            onMouseLeave={() => setHome(false)}
                        >
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                {"Home"}
                                <ExpandMoreIcon />

                            </Typography>
                            {home === true ?
                                <Box
                                    sx={{ width: "200px", position: 'absolute', transition: 'all 0.3s ease', }} >
                                    <div style={{
                                        content: "",
                                        position: 'absolute',
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(45deg)',
                                        backgroundColor: 'white',
                                        marginLeft: '20px',
                                        border: '1px solid',
                                    }} />
                                    <Paper
                                        sx={{ width: "200px", maxWidth: '100%', }}>

                                        <MenuList>
                                            <MenuItem>

                                                <ListItemText>One</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>two</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>three</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>four</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>five</ListItemText>

                                            </MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Box>
                                :
                                null}


                        </Box>
                        <Box
                            onMouseOver={() => setShop(true)}
                            onMouseLeave={() => setShop(false)}
                        >
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                {"Shop"}
                                <ExpandMoreIcon />

                            </Typography>
                            {shop === true ?
                                <Box
                                    sx={{ width: "200px", position: 'absolute', transition: 'all 0.3s ease', }} >
                                    <div style={{
                                        content: "",
                                        position: 'absolute',
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(45deg)',
                                        backgroundColor: 'white',
                                        marginLeft: '20px',
                                        border: '1px solid',
                                    }} />
                                    <Paper
                                        sx={{ width: "200px", maxWidth: '100%', }}>

                                        <MenuList>
                                            <MenuItem>

                                                <ListItemText>shop One</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>shop two</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>shop three</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>shop four</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>shop five</ListItemText>

                                            </MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Box>
                                :
                                null}


                        </Box>
                        <Box
                            onMouseOver={() => setFeature(true)}
                            onMouseLeave={() => setFeature(false)}
                        >
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                {"Features"}
                                <ExpandMoreIcon />

                            </Typography>
                            {feature === true ?
                                <Box
                                    sx={{ width: "200px", position: 'absolute', transition: 'all 0.3s ease', }} >
                                    <div style={{
                                        content: "",
                                        position: 'absolute',
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(45deg)',
                                        backgroundColor: 'white',
                                        marginLeft: '20px',
                                        border: '1px solid',
                                    }} />
                                    <Paper
                                        sx={{ width: "200px", maxWidth: '100%', }}>

                                        <MenuList>
                                            <MenuItem>

                                                <ListItemText>Feature One</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>Feature two</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>Feature three</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>Feature four</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>Feature five</ListItemText>

                                            </MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Box>
                                :
                                null}


                        </Box>
                        <Box
                            onMouseOver={() => setLookBook(true)}
                            onMouseLeave={() => setLookBook(false)}
                        >
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                {"LookBook"}
                                <ExpandMoreIcon />

                            </Typography>
                            {lookBook === true ?
                                <Box
                                    sx={{ width: "200px", position: 'absolute', transition: 'all 0.3s ease', }} >
                                    <div style={{
                                        content: "",
                                        position: 'absolute',
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(45deg)',
                                        backgroundColor: 'white',
                                        marginLeft: '20px',
                                        border: '1px solid',
                                    }} />
                                    <Paper
                                        sx={{ width: "200px", maxWidth: '100%', }}>

                                        <MenuList>
                                            <MenuItem>

                                                <ListItemText>lookBook One</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>lookBook two</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>lookBook three</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>lookBook four</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>lookBook five</ListItemText>

                                            </MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Box>
                                :
                                null}


                        </Box>
                        <Box
                            onMouseOver={() => setPages(true)}
                            onMouseLeave={() => setPages(false)}
                        >
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                {"Pages"}
                                <ExpandMoreIcon />

                            </Typography>
                            {pages === true ?
                                <Box
                                    sx={{ width: "200px", position: 'absolute', transition: 'all 0.3s ease', }} >
                                    <div style={{
                                        content: "",
                                        position: 'absolute',
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(45deg)',
                                        backgroundColor: 'white',
                                        marginLeft: '20px',
                                        border: '1px solid',
                                    }} />
                                    <Paper
                                        sx={{ width: "200px", maxWidth: '100%', }}>

                                        <MenuList>
                                            <MenuItem>

                                                <ListItemText>Page One</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>Page two</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>Page three</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>Page four</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>Page five</ListItemText>

                                            </MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Box>
                                :
                                null}


                        </Box>
                        <Box
                            onMouseOver={() => setBlog(true)}
                            onMouseLeave={() => setBlog(false)}
                        >
                            <Typography
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                {"Pages"}
                                <ExpandMoreIcon />

                            </Typography>
                            {blog === true ?
                                <Box
                                    sx={{ width: "200px", position: 'absolute', transition: 'all 0.3s ease', }} >
                                    <div style={{
                                        content: "",
                                        position: 'absolute',
                                        width: '40px',
                                        height: '40px',
                                        transform: 'rotate(45deg)',
                                        backgroundColor: 'white',
                                        marginLeft: '20px',
                                        border: '1px solid',
                                    }} />
                                    <Paper
                                        sx={{ width: "200px", maxWidth: '100%', }}>

                                        <MenuList>
                                            <MenuItem>

                                                <ListItemText>blog One</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>blog two</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>blog three</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>blog four</ListItemText>

                                            </MenuItem>
                                            <MenuItem>

                                                <ListItemText>blog five</ListItemText>

                                            </MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Box>
                                :
                                null}


                        </Box>

                    </Box>
                    <SocialBox>
                        <SearchIcon sx={{ display: { xs: "none", md: "flex", cursor: "pointer", fontSize: "20px" } }} />
                        <SettingsIcon sx={{ cursor: "pointer", fontSize: "20px" }} />
                        <FavoriteBorderIcon sx={{ display: { xs: "none", md: "flex", cursor: "pointer", fontSize: "20px" } }} />
                        <Badge color="secondary" badgeContent={0} showZero sx={{ cursor: "pointer", }}>
                            <ShoppingBagIcon sx={{ fontSize: "20px" }} />
                        </Badge>
                    </SocialBox>
                </Box>
            </StyledToolbar>
        </AppBar >
    );
};

export default Navbar;