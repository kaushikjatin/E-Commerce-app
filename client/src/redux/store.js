import {createStore, applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'
import PersistReducer from './root-reducer'
import createSagaMiddleware from 'redux-saga';
import {fetchCollectionStart} from './shop/shop.sagas'

const sagamiddleware=createSagaMiddleware();
const middlewares= [sagamiddleware];
if(process.env.NODE_ENV=='development')
    middlewares.push(logger);
export const store = createStore(PersistReducer,applyMiddleware(...middlewares));
sagamiddleware.run(fetchCollectionStart);
export const persistor= persistStore(store);