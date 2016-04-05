import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import history from '../store/history'

const Nav = (navigate, location, className = '') => {
    const homeActive = location === '/';

    return (
        <nav className={`${className}`}
             style={styles.base}>
            <Link to="/about">About</Link>
            {' / '}
            <Link to="/">Home</Link>
        </nav>
    );
};

Nav.propTypes = {
    location: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired
}

export default Radium(Nav);

const styles = {
    base: {
        userSelect: 'none'
    },
    active: {
        textDecoration: 'none',
        borderBottom: '1px solid rgb(15, 16, 18)'
    },
    inactive: {
        textDecoration: 'none',
        cursor: 'pointer'
    }
};