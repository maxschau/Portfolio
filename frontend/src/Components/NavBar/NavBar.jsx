import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CV from "../../Assets/Documents/Max_CV.pdf";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        '&:hover' : {
            backgroundColor: "#C4C4C4"
        }
    },
    title: {
        flexGrow: 1,
        color: "black"
    },
}));

function NavBar() {
    const classes = useStyles();
    console.log(CV);
    return(
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: "#C4C4C4"}}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        MTS
                    </Typography>
                    <Button color="black" href={CV} type="application/pdf" target="_blank" className={classes.menuButton}>CV</Button>
                    <Button color="black" href={"https://github.com/maxschau"}  className={classes.menuButton} target={"_blank"}>GitHub</Button>
                    <Button color="black" href={"https://www.linkedin.com/in/maxtschau/"} className={classes.menuButton} target="_blank">LinkedIn</Button>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default NavBar;