import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class BlogApp extends Component {
    render() {
        return (<div>123</div>)
    }
}

export default connect(state=>({
    blogposts: state.blogposts,
    users: state.users
}))(BlogApp);