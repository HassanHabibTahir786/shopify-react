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
import {
    Menu as MenuIcon,
} from "@mui/icons-material/";
import IconButton from '@mui/material/IconButton';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = ((anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    }
    )

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                {/* <Button onClick={toggleDrawer('left', true)}>{'click me'}</Button> */}
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
