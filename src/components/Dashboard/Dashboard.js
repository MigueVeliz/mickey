import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Apps from './Apps';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
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

class Dashboard extends React.Component {
  render() {

    return (
        <React.Fragment>
            <NavBar />
            <Apps />
        </React.Fragment>
    );
  }
}


Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);