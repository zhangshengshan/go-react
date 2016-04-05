import {Component, PropTypes} from 'react';

export default class MenuItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    };

    onItemClick = (e) => {
        e.preventDefault();
        window.alert('You have clicked ' + this.props.item.label);
    };

    render() {
        return (
            <li key={'menu-item-' + this.props.item.id}>
                <a href="#" onClick={this.onItemClick}>
                    {this.props.item.label}
                </a>
            </li>
        );
    }
}