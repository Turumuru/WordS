import React from "react";
import clsx from "clsx";
import {Link} from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const drawerWidth = 235;
const useStyles = makeStyles((theme) => ({
    paperStyle: {
        background: '#fff',
        top: 64,
        zIndex: 0,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        background: '#fff',
        color: '#50E4A6',
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 70,
        overflowX: "hidden",
        width: theme.spacing(1) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(1) + 1,
        },
    },
}));

const SideMenuBar = ({open}) => {
    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx(classes.paperStyle, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <List>
                <ListItem button key="Определение">
                    <Link to="/Definition" style={{textDecoration: 'none', color: '#50E4A6'}}>
                        <ListItemText primary="Определение"/>
                    </Link>
                </ListItem>
                <ListItem button key="Синонимы">
                    <Link to="/Synonyms" style={{textDecoration: 'none', color: '#50E4A6'}}>
                        <ListItemText primary="Синонимы"/>
                    </Link>
                </ListItem>
                <ListItem button key="Антонимы">
                    <Link to="/Antonyms" style={{textDecoration: 'none', color: '#50E4A6'}}>
                        <ListItemText primary="Антонимы"/>
                    </Link>
                </ListItem>
                <ListItem button key="Примеры в предложении">
                    <Link to="/Examples" style={{textDecoration: 'none', color: '#50E4A6'}}>
                        <ListItemText primary="Примеры в предложении"/>
                    </Link>
                </ListItem>
                <ListItem button key="Рифмы">
                    <Link to="/Rhymes" style={{textDecoration: 'none', color: '#50E4A6'}}>
                        <ListItemText primary="Рифмы"/>
                    </Link>
                </ListItem>
                <ListItem button key="Произношение">
                    <Link to="/Pronunciation" style={{textDecoration: 'none', color: '#50E4A6'}}>
                        <ListItemText primary="Произношение"/>
                    </Link>
                </ListItem>
                <ListItem button key="Слоги">
                    <Link to="/Syllables" style={{textDecoration: 'none', color: '#50E4A6'}}>
                        <ListItemText primary="Слоги"/>
                    </Link>
                </ListItem>
            </List>
        </Drawer>
    );
};
export default SideMenuBar;