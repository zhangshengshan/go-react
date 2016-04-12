import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {routerActions} from 'react-router-redux'
import Radium from 'radium'
import Nav from '../components/nav'

function mapStateToProps(state) {
    let location = state.routing.locationBeforeTransitions ? state.routing.locationBeforeTransitions.pathname : '';
    return {
        location
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: (route) => {
            dispatch(routerActions.push(router));
        }
    }
}

class App extends Component {
    render() {
        const {props} = this;
        return (
            <div className="flex flex-row">
                <Nav className="absolute bottom-0 right-0 p2"
                     location={props.location}
                     navigate={props.navigate}/>

                <div className="p2" styles={styles.container}>
                    {props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    location: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Radium(App));

const styles = {
    background: {
        width: '80vw',
        height: '100vh'
    },
    container: {
        width: '20vw'
    }
}
