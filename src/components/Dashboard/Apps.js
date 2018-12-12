import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    
  },
  navTitle: {
    marginTop: 80
  },
  singleGrid: {
  },
  paper: {
    height: 400,
    width: 200,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white'
}
});

class Apps extends React.Component {
  state = {
    spacing: '4',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <React.Fragment>
            <Typography align="center" variant="h3" className={classes.navTitle}>
                My Applications
            </Typography>


            <Grid container justify="center" className={classes.root} spacing={16}>
                <Grid item xs={10}  className={classes.innerContainer} >
                    <Grid container justify="center" spacing={40}  >
                        <Grid item >
                            <Paper className={classes.root} elevation={1}>
                                <Typography variant="h5" component="h3">
                                    Create new app
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item >
                            <Paper className={classes.root} elevation={1}>
                                <Typography variant="h5" component="h3">
                                    Travel App
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item >
                            <Paper className={classes.root} elevation={1}>
                                <Typography variant="h5" component="h3">
                                    News App
                                </Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </React.Fragment>
    );
  }
}


Apps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Apps);