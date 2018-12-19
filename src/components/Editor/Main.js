import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

import Editor from './Editor';

const styles = theme => ({
    root: {
      background: '#E7F0FF',
      textAlign: 'center',
    //   height: '100vh'
    },
    buttonDiv: {
        position: "absolute",
        margin: "auto",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: 100,
    },
    titleStyle: {
        fontSize: 30,
    },
    linkStyle: {
        textDecoration: 'none',
        // color: 'white'
    }
});

const Main = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="sticky" className={classes.navBarStyle} >
                <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    MICKEY Editor
                </Typography>
                <Button color="inherit">Pricing</Button>
                <Button component={Link} to="/templates" color="inherit">Templates</Button>

                </Toolbar>
            </AppBar>

            <Editor />
        </div>
    );
}


export default withStyles(styles)(Main);