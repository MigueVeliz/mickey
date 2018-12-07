import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

import TemplatesDemo from './TemplatesDemo';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    topToolBar: {
        align: 'right',
        // background: "blue"
    },
    NavColor: {
        background: 'transparent',
        // borderBottom: '1px black',
        boxShadow: '0 1px 0px 0px rgba(0, 0, 0, 0.9)',
        background: "#283044"
        
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    buttonDiv: {
        position: "absolute",
        margin: "auto",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    navTitle: {
      padding: 20 ,
      color: 'white',

    },
    centerTitle: {
        marginTop: 50,
    },
    infoText: {
        marginTop: 25,
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white'
    }

  }

const Templates = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static"  className={classes.NavColor}>
                <Toolbar className={classes.topToolBar}>
                    <Typography align="center" variant="h6" className={classes.navTitle}>
                        Create a new app
                    </Typography>

                     <Link to="/login" className={classes.linkStyle}>
                        <Button variant="contained" color="secondary">Create a Blank App</Button>
                    </Link>
                </Toolbar>
            </AppBar>

            <Typography color="textSecondary" align="center" variant="h3" className={classes.centerTitle} >
                Choose an app template
            </Typography>

            <Typography color="textSecondary" align="center" variant="h6" className={classes.infoText} >
                Choose a template based on the features, or just the looks. Customize everything later
            </Typography>

            <Typography color="textSecondary" align="center" variant="h6"  >
                Customize everything later
            </Typography>

            <TemplatesDemo />

        </div>
    );
}


export default withStyles(styles)(Templates);