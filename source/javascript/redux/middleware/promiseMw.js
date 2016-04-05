import isPromise from '../../modules/utils/isPromise'

export default function promise({dispatch}) {
    return next => action => {
        if (!isPromise(action.payload)) {
            return next(action);
        }

        const {types, payload, meta} = action;
        const {promise, data} = payload;
        const {PENDING, FULLFILLED,REJECTED} = types;

        dispatch({
            type: PENDING,
            ...data && {payload: data},
            ...meta && {meta}
        });

        return promise.then(
            result => {
                dispatch({
                    type: FULLFILLED,
                    payload: result,
                    meta: meta
                });
            },
            error => {
                dispatch({
                    type: REJECTED,
                    payload: error,
                    meta: meta
                });
            }
        );
    };
}