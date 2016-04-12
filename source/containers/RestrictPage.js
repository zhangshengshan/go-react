import {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { routerActions} from 'react-router-redux';

class RestrictPage extends Component {
    static propTypes = {
        user: PropTypes.string,
        history: PropTypes.object.isRequired,
        children: PropTypes.object
    }

    componentWillMount() {
        const {dispatch, user} = this.props;
        if (!user) {
            dispatch(routerActions.push('/login'));
        }
    }

    render() {
        const {user} = this.props;
        if (user) {
            return this.props.children;
        } else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {user: state.auth.user};
}

export default connect(mapStateToProps)(RestrictPage);
