import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";


import TabContainer from './TabContainer';

const styles = theme => ({
    navBarStyle: {
        background: '#283044',
        boxShadow: '0 1px 1px 0px skyblue',

    },
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 400,
        width: 550,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    demo: {
        //   background: 'salmon',
        marginTop: 100
    },
    grow: {
        marginRight: 100
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white'
    }
});

class Container extends React.Component {
  state = {
    spacing: '16',
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
        <div>
            <AppBar position="static" className={classes.navBarStyle} >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            <Link to="/" className={classes.linkStyle}>
                                MICKEY
                            </Link>
                        </Typography>
                        <Button color="inherit">Pricing</Button>
                        <Button color="inherit">Blog</Button>
                    </Toolbar>
            </AppBar>

            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <TabContainer />
                        </Paper>
                    </Grid>
                </Grid>
                </Grid>

            </Grid>
        </div>
    );
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);