import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import injectTapEventPlugin from 'react-tap-event-plugin';

import styles from './styles/base.css';
import normalize from './styles/normalize.css';
Object.assign(styles, normalize);

injectTapEventPlugin();

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);