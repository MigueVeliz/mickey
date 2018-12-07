import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class SignUpForm extends React.Component {

    state = {
        email: 'email@gmail.com',
        password: '*****'
    };


    handleLogIn = () => {
        console.log("Signing in!: " + this.state.email)
    }

    handleChange = name => event => {
    this.setState({
        [name]: event.target.value,
    });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-full-width"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        style={{ margin: 8 }}
                        placeholder={this.state.email}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        id="standard-full-width"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        style={{ margin: 8 }}
                        placeholder="******"
                        fullWidth
                        type="password"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </form>

                <Button 
                    variant="contained" 
                    size="large" 
                    color="secondary" 
                    className={classes.button}
                    onClick={ () => this.handleLogIn() }
                >
                    Sign Up
                </Button>

            </div>
        );
    }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);