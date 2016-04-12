import {browserHistory} from 'react-router'

const _createBrowserHistory = () => {
    if (global.window) {
        return browserHistory;
    }

    return undefined;
}

const createHistory = _createBrowserHistory();

export default createHistory;