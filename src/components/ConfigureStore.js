import {createStore} from 'redux';
import {Recuder, initState} from './Reduce';

export const ConfigureStore = ()=>{
    const store = createStore(Recuder, initState);
    return store;
}
