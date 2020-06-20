import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Harmoni from "../../Assets/Images/Harmoni.png";
import Typography from '@material-ui/core/Typography';
import ImageLink from "../ImageLink/ImageLink.js";
import {useDarkMode} from "../useDarkMode/useDarkMode";
import {lightTheme, darkTheme} from "../Theme/Themes";


const baseURL = "../../Assets/Images/";

const useStyles = makeStyles(theme => ({
    container: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '25px',
        height: "300px",
        opacity: '100%',
        textAlign: 'center',
        fontFamily: "Vollkorn, serif",
        width: "100%",
    },
    box: {
        height: "200px",
    }, 
    image: {
        objectFit: "cover",
        width: "30%",
        height: "120px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            heigth: "50%",
          }
    },
    title: {
        fontSize: "40px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: "35px",
          }
    },
    description: {
        fontSize: "12px",
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: "15px",
          }
    },
}));

function ProjectCard(props) {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    console.log("Theme: " + theme);

    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const imageURL =  require("../../Assets/Images/" + props.image);
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Grid container spacing={12}>
                <Grid item xs={12} md={12}>
                    <img src={imageURL} alt={"Hello"} className={classes.image} />
                </Grid>
                <Grid item xs={12}md={12}> 
                    <Typography variant="h4" className={classes.title}>{props.title}</Typography>
                </Grid>
                <Grid item xs={12}md={12}> 
                    <Typography variant="subtitle1" className={classes.description}>{props.description} </Typography>
                </Grid>
                <Grid item xs={6} md={6}> 
                    <ImageLink image={theme == "dark" ? "GitHub2.png" : "GitHub.png"} link={props.link} className={classes.link}/>
                </Grid>
            </Grid>
            
        

            


        </div>
    )
}

export default ProjectCard;