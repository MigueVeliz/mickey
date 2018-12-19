import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Item from './Item';
import Device from './Device';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 50,
        height: '100vh',
    },
    innerContainer: {
        height: '100%'
    },
    componentsPanel: {
        height: 400,
        width: 500,
    },
    devicePanel: {
        height: 440,
        width: 300,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white'
  }
});

class Editor extends Component {

    state = {
        divs: [
            { 
                id: 0, 
                text: "Div 0",
                parentContainer: "components"
            },
            { 
                id: 1, 
                text: "Div 1",
                parentContainer: "components"
            },
            { 
                id: 2, 
                text: "Div 2",
                parentContainer: "components"
            },
            { 
                id: 3, 
                text: "Div 3",
                parentContainer: "components"
            },
            { 
                id: 4, 
                text: "Div 4",
                parentContainer: "components"
            },
        ]
    }

    fireChange(index) {
        console.log("changing Item's component type.")
        

        this.setState({
            divs: [...this.state.divs, { ...this.state.divs[index], parentContainer: "device", id: this.state.divs.length }  ]
            // divs: this.state.divs.map( el => ( el.id === index ? Object.assign( {}, el, { parentContainer: "device" }) : el ))
        })
    }


    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center" className={classes.root} spacing={8}>
                <Grid item xs={6}  className={classes.innerContainer} >
                    <Grid container justify="center" spacing={8}  >
                        <Grid item >
                            <Paper className={classes.componentsPanel} >
                                {
                                    this.state.divs.map( (div, index)  => {
                                        return ( 
                                            div.parentContainer === "components" ? 
                                            <Item
                                                // fireChange={ () => this.fireChange }
                                                id={div.id}
                                                text={div.text}
                                                parentContainer={div.parentContainer}
                                                key={div.id}
                                            /> : null 
                                        )
                                    })
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={6}  className={classes.innerContainer} >
                    <Grid container justify="center" spacing={8}  >
                        <Grid item >
                            <Paper className={classes.devicePanel} >
                                <Device
                                    fireChange={ this.fireChange.bind(this) } 
                                >
                                    {
                                        this.state.divs.map( (div, index)  => {
                                            return ( 
                                                div.parentContainer === "device" ? 
                                                <Item 
                                                    id={div.id}
                                                    text={div.text}
                                                    parentContainer={div.parentContainer}
                                                    key={div.id}
                                                /> : null 
                                            )
                                        })
                                    }
                                </Device>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Editor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default DragDropContext(HTML5Backend)(withStyles(styles) (Editor) );