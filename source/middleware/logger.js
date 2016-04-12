import createLogger from 'redux-logger'
import {immutableToJS} from '../modules/utils/immutableToJS'


const logger = createLogger({
    collapsed: true,
    stateTransformer: (state) => {
        return immutableToJS(state);
    }
});

export default logger;