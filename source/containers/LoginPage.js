import 'babel-polyfill';
import  React, {PropTypes, Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions} from 'react-router-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';

import ActionAccountCircle from 'material-ui/lib/svg-icons/action/account-circle';

import * as aa  from '../actions';

class LoginPage extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    static contextTypes = {
        muiTheme: PropTypes.object.isRequired
    }

    getStyles() {
        return {
            error: {
                textAlign: 'left'
            },
            center: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: 10
            },
            paper: {
                maxHeight: 400,
                maxWidth: 400,
                textAlign: 'center',
                padding: '20px 40px'
            },
            submit: {
                marginTop: 10,
                marginBottom: 20,
                width: '100%'
            }
        };
    }

    componentWillUpdate(nextProps, nextState) {
        const { auth, dispatch } = nextProps;
        if (auth.shouldRedirect) {
            dispatch(routerActions.push('/aaa'));
        }
    }

    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.center}>
                <ActionAccountCircle style={{height:100, width:100}}/><br/>
                <Paper style={styles.paper}>
                    <TextField ref="identity"
                               hintText="email"
                               floatingLabelText="email"
                               defaultValue="lumeng689@163.com"
                               errorStyle={styles.error}
                               errorText={this.props.auth.error && this.props.auth.payload}
                               onKeyDown={::this.submit}/> <br/>

                    <TextField ref="password"
                               hintText="password"
                               floatingLabelText='password'
                               type="password"
                               defaultValue="123456"
                               onKeyDown={::this.submit}/> <br/>

                    <RaisedButton style={styles.submit}
                                  label="Submit"
                                  onTouchTap={::this.submit}
                                  primary/>
                </Paper>
            </div>
        );
    }

    submit(event) {
        const {dispatch} = this.props;
        const cc = bindActionCreators(aa, dispatch);

        const identity = this.refs.identity.state.hasValue;
        const password = this.refs.password.state.hasValue;

        if (event.type === 'keydown' && event.keyCode !== 13) {
            return;
        }

        cc.login(identity, password);
    }
}

export default connect(state => ({auth: state.auth}))(LoginPage)


