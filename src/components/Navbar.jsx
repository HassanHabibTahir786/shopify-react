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
import { grey } from '@mui/material/colors';



const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
    return (
        <AppBar
            sx={{
                color: "black",
                backgroundColor: grey[200],
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



                    <Box sx={{
                        display: { xs: "none", sm: "none", md: "flex", },
                        marginRight: { md: 2, lg: 6 },
                        alignItems: "center",
                        gap: { md: 2, lg: 4 }
                    }}>


                        <Box
                            sx={{
                                padding: "20px 0",
                                position: "relative", "&:hover": {
                                    "& .submanue": {
                                        display: 'block',
                                    }
                                }
                            }}>
                            <Typography
                                className="main"
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                HOME
                                <ExpandMoreIcon />

                            </Typography>
                            <Box
                                className="submanue"
                                sx={{
                                    width: "150px",
                                    marginTop: "20px",
                                    display: "none",
                                    position: 'absolute',
                                    zIndex: '999',
                                    left: 0,
                                    border: "1px solid grey"
                                }} >
                                <div style={{
                                    content: "",
                                    position: 'absolute',
                                    width: '40px',
                                    height: '40px',
                                    transform: 'rotate(45deg)',
                                    backgroundColor: 'white',
                                    marginLeft: '20px',
                                    border: '1px solid grey',
                                    zIndex: '-1',
                                }} />
                                <Paper >

                                    <MenuList>
                                        <MenuItem>

                                            <ListItemText>Home1</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>Home2</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>Home3</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>Home4</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>Home5</ListItemText>

                                        </MenuItem>
                                    </MenuList>
                                </Paper>
                            </Box>



                        </Box>
                        <Box
                            sx={{
                                padding: "20px 0",
                                position: "relative", "&:hover": {
                                    "& .submanue": {
                                        display: 'block',
                                    }
                                }
                            }}>
                            <Typography
                                className="main"
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                SHOP
                                <ExpandMoreIcon />

                            </Typography>
                            <Box
                                className="submanue"
                                sx={{
                                    width: "150px",
                                    marginTop: "20px",
                                    display: "none",
                                    position: 'absolute',
                                    zIndex: '999',
                                    left: 0,
                                    border: "1px solid grey"
                                }} >
                                <div style={{
                                    content: "",
                                    position: 'absolute',
                                    width: '40px',
                                    height: '40px',
                                    transform: 'rotate(45deg)',
                                    backgroundColor: 'white',
                                    marginLeft: '20px',
                                    border: '1px solid grey',
                                    zIndex: '-1',
                                }} />
                                <Paper>

                                    <MenuList>
                                        <MenuItem>

                                            <ListItemText>shop1</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>shop2</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>shop3</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>shop4</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>shop5</ListItemText>

                                        </MenuItem>
                                    </MenuList>
                                </Paper>
                            </Box>
                            {/* :
                                    null} */}


                        </Box>
                        <Box
                            sx={{
                                padding: "20px 0",
                                position: "relative", "&:hover": {
                                    "& .submanue": {
                                        display: 'block',
                                    }
                                }
                            }}>
                            <Typography
                                className="main"
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                FEATURES
                                <ExpandMoreIcon />

                            </Typography>
                            <Box
                                className="submanue"
                                sx={{
                                    width: "150px",
                                    marginTop: "20px",
                                    display: "none",
                                    position: 'absolute',
                                    zIndex: '999',
                                    left: 0,
                                    border: "1px solid grey"
                                }} >
                                <div style={{
                                    content: "",
                                    position: 'absolute',
                                    width: '40px',
                                    height: '40px',
                                    transform: 'rotate(45deg)',
                                    backgroundColor: 'white',
                                    marginLeft: '20px',
                                    border: '1px solid grey',
                                    zIndex: '-1',
                                }} />
                                <Paper>

                                    <MenuList>
                                        <MenuItem>

                                            <ListItemText>feature1</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>feature2</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>feature3</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>feature4</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>feature5</ListItemText>

                                        </MenuItem>
                                    </MenuList>
                                </Paper>
                            </Box>


                        </Box>
                        <Box
                            sx={{
                                padding: "20px 0",
                                position: "relative", "&:hover": {
                                    "& .submanue": {
                                        display: 'block',
                                    }
                                }
                            }}>
                            <Typography
                                className="main"
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                LOOKBOOK
                                <ExpandMoreIcon />

                            </Typography>
                            <Box
                                className="submanue"
                                sx={{
                                    width: "150px",
                                    marginTop: "20px",
                                    display: "none",
                                    position: 'absolute',
                                    zIndex: '999',
                                    left: 0,
                                    border: "1px solid grey"
                                }} >
                                <div style={{
                                    content: "",
                                    position: 'absolute',
                                    width: '40px',
                                    height: '40px',
                                    transform: 'rotate(45deg)',
                                    backgroundColor: 'white',
                                    marginLeft: '20px',
                                    border: '1px solid grey',
                                    zIndex: '-1',
                                }} />
                                <Paper>

                                    <MenuList>
                                        <MenuItem>

                                            <ListItemText>lookbook1</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>lookbook2</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>lookbook3</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>lookbook4</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>lookbook5</ListItemText>

                                        </MenuItem>
                                    </MenuList>
                                </Paper>
                            </Box>


                        </Box>
                        <Box
                            sx={{
                                padding: "20px 0",
                                position: "relative", "&:hover": {
                                    "& .submanue": {
                                        display: 'block',
                                    }
                                }
                            }}>
                            <Typography
                                className="main"
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                PAGES
                                <ExpandMoreIcon />

                            </Typography>
                            <Box
                                className="submanue"
                                sx={{
                                    width: "150px",
                                    marginTop: "20px",
                                    display: "none",
                                    position: 'absolute',
                                    zIndex: '999',
                                    left: 0,
                                    border: "1px solid grey"
                                }} >
                                <div style={{
                                    content: "",
                                    position: 'absolute',
                                    width: '40px',
                                    height: '40px',
                                    transform: 'rotate(45deg)',
                                    backgroundColor: 'white',
                                    marginLeft: '20px',
                                    border: '1px solid grey',
                                    zIndex: '-1',
                                }} />
                                <Paper>

                                    <MenuList>
                                        <MenuItem>

                                            <ListItemText>page1</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>page2</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>page3</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>page4</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>page5</ListItemText>

                                        </MenuItem>
                                    </MenuList>
                                </Paper>
                            </Box>


                        </Box>
                        <Box
                            sx={{
                                padding: "20px 0",
                                position: "relative", "&:hover": {
                                    "& .submanue": {
                                        display: 'block',
                                    }
                                }
                            }}>
                            <Typography
                                className="main"
                                sx={{
                                    cursor: "pointer",
                                    fontSize: { md: "10px", lg: "12px" },
                                    display: 'flex',
                                    alignItems: 'center',

                                }}
                            >
                                BLOG
                                <ExpandMoreIcon />

                            </Typography>
                            <Box
                                className="submanue"
                                sx={{
                                    width: "150px",
                                    marginTop: "20px",
                                    display: "none",
                                    position: 'absolute',
                                    zIndex: '999',
                                    left: 0,
                                    border: "1px solid grey"
                                }} >
                                <div style={{
                                    content: "",
                                    position: 'absolute',
                                    width: '40px',
                                    height: '40px',
                                    transform: 'rotate(45deg)',
                                    backgroundColor: 'white',
                                    marginLeft: '20px',
                                    border: '1px solid grey',
                                    zIndex: '-1',
                                }} />
                                <Paper>

                                    <MenuList>
                                        <MenuItem>

                                            <ListItemText>blog1</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>blog2</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>blog3</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>blog4</ListItemText>

                                        </MenuItem>
                                        <MenuItem>

                                            <ListItemText>blog5</ListItemText>

                                        </MenuItem>
                                    </MenuList>
                                </Paper>
                            </Box>
                        </Box>
                    </Box>
                    <SocialBox sx={{ padding: "20px 0" }}>
                        <SearchIcon sx={{ display: { xs: "none", md: "flex", cursor: "pointer", fontSize: "20px", } }} />
                        <SettingsIcon sx={{ cursor: "pointer", fontSize: "20px", }} />
                        <FavoriteBorderIcon sx={{ display: { xs: "none", md: "flex", cursor: "pointer", fontSize: "20px", } }} />
                        <Badge color="secondary" badgeContent={0} showZero sx={{ cursor: "pointer", }}>
                            <ShoppingBagIcon sx={{ fontSize: "20px", }} />
                        </Badge>
                    </SocialBox>
                </Box>



            </StyledToolbar>

        </AppBar >
    );
};

export default Navbar;