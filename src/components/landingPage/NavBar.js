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



const styles = {
  root: {
    flexGrow: 1,
  },
  navBarStyle: {
    border: 0,
    background: "#283044"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white'
}
};

const NavBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBarStyle} >
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            MICKEY
          </Typography>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">Sign In</Button>

          <Button component={Link} to="/templates" variant="contained" color="secondary">Create Your App</Button>


        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);