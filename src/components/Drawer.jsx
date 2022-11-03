import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import {
    Menu as MenuIcon,
} from "@mui/icons-material/";
import IconButton from '@mui/material/IconButton';
import ListSubheader from '@mui/material/ListSubheader';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

   
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // const [open, setOpen] = React.useState({
    //     home: false,
    //     shop: false,
    //     features: false,
    //     lookbook: false,
    //     pages: false,
    //     blog: false
    // });



    const list = (anchor) => (
        <Box

            sx={{ width: 250 }}
            role="presentation"
        >
            <IconButton
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <CloseIcon />
            </IconButton>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 0 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} disableGutters={true}	>
                    <AccordionSummary
                        disableGutters={true}
                        // expandIcon={<ExpandMoreIcon />}
                        expandIcon={expanded === 'panel1' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, fontSize: "13px" }}>
                            HOME
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "#f2f2f2", padding: "0" }}>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            home1
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            home2
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            home3
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            home4
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            home5
                        </Typography>

                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} disableGutters={true}>
                    <AccordionSummary
                        disableGutters={true}
                        expandIcon={expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, fontSize: "13px" }}>SHOP</Typography>

                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "#f2f2f2", padding: "0" }}>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            shop1
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            shop2
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            shop3
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            shop4
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            shop5
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} disableGutters={true}>
                    <AccordionSummary
                        disableGutters={true}
                        expandIcon={expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, fontSize: "13px" }}>
                            FEATURES
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "#f2f2f2", padding: "0" }}>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            feature1
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            feature2
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            feature3
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            feature4
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            feature5
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} disableGutters={true}>
                    <AccordionSummary
                        disableGutters={true}
                        expandIcon={expanded === 'panel4' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, fontSize: "13px" }}>LOOKBOOK</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "#f2f2f2", padding: "0" }}>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            lookbook1
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            lookbook2
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            lookbook3
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            lookbook4
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            lookbook5
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} disableGutters={true}>
                    <AccordionSummary
                        disableGutters={true}
                        expandIcon={expanded === 'panel5' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, fontSize: "13px" }}>PAGES</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "#f2f2f2", padding: "0" }}>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            page1
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            page2
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            page3
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            page4
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            page5
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} disableGutters={true}>
                    <AccordionSummary
                        disableGutters={true}
                        expandIcon={expanded === 'panel6' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0, fontSize: "13px" }}>BLOG</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "#f2f2f2", padding: "0" }}>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            blog1
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            blog2
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            blog3
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            blog4
                        </Typography>
                        <Typography sx={{ borderTop: "1px solid #c3bfbf", paddingY: "6px", paddingLeft: "30px" , cursor:"pointer", transition:"all .5s", "&:hover":{bgcolor:"#d7d0d0"}}}>
                            blog5
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* <ListItemButton
                    sx={{ borderTop: "1px solid #cbc3c3", padding: "3px 7px" }}
                    onClick={() => {
                        open.home === false ?
                            setOpen(prevState => ({
                                ...prevState,
                                home: true
                            }))
                            :
                            setOpen(prevState => ({
                                ...prevState,
                                home: false
                            }))
                    }}>
                    <ListItemText primary="Home" />
                    {open.home ? <RemoveIcon /> : <AddIcon />}
                </ListItemButton> */}
                {/* <Collapse in={open.home} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ bgcolor: "#f2f2f2" }}>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="home1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="home2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="home3" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="home4" />
                        </ListItemButton>
                    </List>
                  
                </Collapse> */}
                {/* <ListItemButton
                    sx={{ borderTop: "1px solid #cbc3c3", padding: "3px 7px" }}
                    onClick={() => {
                        open.shop === false ?
                            setOpen(prevState => ({
                                ...prevState,
                                shop: true
                            }))
                            :
                            setOpen(prevState => ({
                                ...prevState,
                                shop: false
                            }))

                    }}>
                    <ListItemText primary="Shop" />
                    {open.shop ? <RemoveIcon /> : <AddIcon />}
                </ListItemButton> */}
                {/* <Collapse in={open.shop} timeout="auto" unmountOnExit sx={{ bgcolor: "#f2f2f2" }}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="shop1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="shop2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="shop3" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="shop4" />
                        </ListItemButton>
                    </List>
                </Collapse> */}
                {/* <ListItemButton
                    sx={{ borderTop: "1px solid #cbc3c3", padding: "3px 7px" }}
                    onClick={() => {
                        open.features === false ?
                            setOpen(prevState => ({
                                ...prevState,
                                features: true
                            }))
                            :
                            setOpen(prevState => ({
                                ...prevState,
                                features: false
                            }))
                    }}>
                    <ListItemText primary="Features" />
                    {open.features ? <RemoveIcon /> : <AddIcon />}

                </ListItemButton> */}
                {/* <Collapse in={open.features} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ bgcolor: "#f2f2f2" }}>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="features1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="features2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="features3" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="features4" />
                        </ListItemButton>
                    </List>
                </Collapse> */}
                {/* <ListItemButton
                    sx={{ borderTop: "1px solid #cbc3c3", padding: "3px 7px" }}
                    onClick={() => {
                        open.lookbook === false ?
                            setOpen(prevState => ({
                                ...prevState,
                                lookbook: true
                            }))
                            :
                            setOpen(prevState => ({
                                ...prevState,
                                lookbook: false
                            }))
                    }}>
                 
                    <ListItemText primary="Lookbook" />
                    {open.lookbook ? <RemoveIcon /> : <AddIcon />}
                </ListItemButton> */}
                {/* <Collapse in={open.lookbook} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ bgcolor: "#f2f2f2" }}>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="home1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="home2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="home3" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="home4" />
                        </ListItemButton>
                    </List>
                </Collapse> */}
                {/* <ListItemButton
                    sx={{ borderTop: "1px solid #cbc3c3", padding: "3px 7px" }}
                    onClick={() => {
                        open.pages === false ?
                            setOpen(prevState => ({
                                ...prevState,
                                pages: true
                            }))
                            :
                            setOpen(prevState => ({
                                ...prevState,
                                pages: false
                            }))
                    }}>
                   
                    <ListItemText primary="Pages" />
                    {open.pages ? <RemoveIcon /> : <AddIcon />}
                </ListItemButton> */}
                {/* <Collapse in={open.pages} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ bgcolor: "#f2f2f2" }}>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="page1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="page2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="page3" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="page4" />
                        </ListItemButton>
                    </List>
                </Collapse> */}
                {/* <ListItemButton
                    sx={{ borderTop: "1px solid #cbc3c3", padding: "3px 7px" }}
                    onClick={() => {
                        open.blog === false ?
                            setOpen(prevState => ({
                                ...prevState,
                                blog: true
                            }))
                            :
                            setOpen(prevState => ({
                                ...prevState,
                                blog: false
                            }))
                    }}>
                    <ListItemText primary="Blog" />
                    {open.blog ? <RemoveIcon /> : <AddIcon />}
                </ListItemButton> */}
                {/* <Collapse in={open.blog} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ bgcolor: "#f2f2f2" }}>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="blog1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="blog2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="blog3" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4, py: 0, borderTop: "1px solid #c3bfbf" }}>
                            <ListItemText primary="blog4" />
                        </ListItemButton>
                    </List>
                </Collapse> */}



            </List>


            <Divider />
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <IconButton
                    onClick={toggleDrawer('left', true)}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
