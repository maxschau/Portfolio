import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CV from "../../Assets/Documents/Max_CV.pdf";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        color: "white",
        marginRight: theme.spacing(2),
        '&:hover': {
            backgroundColor: "#C4C4C4"
        }
    },
    title: {
        flexGrow: 1,
        color: "white",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: "25px",
        }
    },
}));

function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "#281862" }}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        MTS
                    </Typography>
                    <Button color="black" href={CV} type="application/pdf" target="_blank" className={classes.menuButton}>CV</Button>
                    <Button color="black" href={"https://github.com/maxschau"} className={classes.menuButton} target={"_blank"}>GitHub</Button>
                    <Button color="black" href={"https://www.linkedin.com/in/maxtschau/"} className={classes.menuButton} target="_blank">LinkedIn</Button>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default NavBar;