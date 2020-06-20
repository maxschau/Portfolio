import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CV from "../../Assets/Documents/Max_CV.pdf";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../GlobalStyles/globalStyles";
import { lightTheme, darkTheme } from "../Theme/Themes";
import {useDarkMode} from "../useDarkMode/useDarkMode";
import DarkModeToggle from "react-dark-mode-toggle";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: "1px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        '&:hover' : {
            backgroundColor: "#C4C4C4"
        }
    },
    title: {
        flexGrow: 1,
        color: "black",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: "25px",
          }
    },
}));

function NavBar() {
    const classes = useStyles();
    const [theme, themeToggler] = useDarkMode();
    const checked = theme == "dark";
    const matches = useMediaQuery('(min-width:600px)');

    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return(
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: "#C4C4C4"}}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        MTS
                    </Typography>
                    <DarkModeToggle onChange={themeToggler} checked={checked} size={matches ? 50 : 30}/>
                    <Button color="black" href={CV} type="application/pdf" target="_blank" className={classes.menuButton}>CV</Button>
                    <Button color="black" href={"https://github.com/maxschau"}  className={classes.menuButton} target={"_blank"}>GitHub</Button>
                    <Button color="black" href={"https://www.linkedin.com/in/maxtschau/"} className={classes.menuButton} target="_blank">LinkedIn</Button>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default NavBar;