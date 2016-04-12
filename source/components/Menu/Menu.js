import React from 'react';
import MenuItem from './MenuItem';

let {Component, PropTypes} = React;

export default class Menu extends Component {

    static defaultProps = {
        items: []
    };

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return (
            <ul>
                { this.props.items.map((item) => {
                    return (<MenuItem item={item}/>);
                }, this)}
            </ul>
        );
    }
}