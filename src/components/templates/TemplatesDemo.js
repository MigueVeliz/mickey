import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Link } from "react-router-dom";



import Card from './Card';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
    // width: 1000,
    // background: 'salmon',
    // align: 'center'
  },
  innerContainer: {
    // background: 'blue'
  },
  singleGrid: {
    // height: 400,
    // width: 200,
    // background: 'salmon'
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

class TemplatesDemo extends React.Component {
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
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} className={classes.innerContainer} >
            <Grid container justify="center" spacing={40}  >
                <Grid item >
                    <Link to="/login" className={classes.linkStyle}>
                        <Card 
                            image="https://i.ibb.co/x7117wC/iphone-imag-544x968.jpg" 
                            title="News App"
                        />
                    </Link>
                </Grid>
                <Grid item >
                    <Link to="/login" className={classes.linkStyle}>
                        <Card 
                            image="https://i.ibb.co/HgYgCPW/university-app.jpg" 
                            title="University App"
                        />
                    </Link>
                </Grid>
                <Grid item  >
                    <Link to="/login" className={classes.linkStyle}>
                        <Card 
                            image="https://i.ibb.co/6n2Gwc3/products-app.jpg" 
                            title="Products App"
                        />
                    </Link>
                </Grid>
                <Grid item >
                    <Link to="/login" className={classes.linkStyle}>
                        <Card 
                            image="https://i.ibb.co/TTmSTdN/small-business.jpg" 
                            title="Small Business App"
                        />
                    </Link>
                </Grid>
                <Grid item >
                    <Link to="/login" className={classes.linkStyle}>
                        <Card 
                            image="https://i.ibb.co/NsVtjN9/travel.jpg" 
                            title="Travel App"
                        />
                    </Link>
                </Grid>
                <Grid item  >
                    <Link to="/login" className={classes.linkStyle}>
                        <Card 
                            image="https://i.ibb.co/4MYGhDC/events.jpg" 
                            title="Events App"
                        />
                    </Link>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    );
  }
}


TemplatesDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplatesDemo);