import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const styles = theme => ({
    root: {
    //   flex: 5,
    //   backgroundColor: 'salmon',
      textAlign: 'center',
    //   height: 900,
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
    }
});

const LogIn = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.buttonDiv}>
                <h3 className={classes.titleStyle}>Log In to start</h3>
            </div>
        </div>
    );
}


export default withStyles(styles)(LogIn);