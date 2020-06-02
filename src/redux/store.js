import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {
    allReducers
} from './combinereducer';


const logger = store => next => action => {
    console.group(action)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const store = createStore(
    allReducers , undefined , compose(applyMiddleware(thunk)))
    
export default store;
