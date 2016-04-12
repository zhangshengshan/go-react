import {Component, PropTypes} from 'react';
import {LeftNav as MuiLeftNav} from 'material-ui';

let menuItems = [
    { route: 'home', text: 'Posts' },
    { route: 'about', text: 'About' }
];

export default class LeftNav extends Component {
    state = {
        selectedIndex: null
    };

    render() {}
}