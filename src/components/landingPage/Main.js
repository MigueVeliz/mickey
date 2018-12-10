import React from 'react';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const styles = theme => ({
    root: {
    //   flex: 5,
      background: '#E7F0FF',
      textAlign: 'center',
      height: '100vh'
    },
    buttonDiv: {
        position: "absolute",
        margin: "auto",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        // width: 200,
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
            <div className={classes.buttonDiv}>

                

                <h3 className={classes.titleStyle}>Create exceptional apps - faster!</h3>

                <Link to="/templates" className={classes.linkStyle} ><Button variant="contained" color="primary">Create Your App</Button></Link>

            </div>
        </div>
    );
}


export default withStyles(styles)(Main);