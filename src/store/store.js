import {applyMiddleware, createStore} from 'redux';
import {allReducers} from './allReducers';
import {persistReducer, persistStore} from 'redux-persist';
import reduxSaga from 'redux-saga';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {allSaga} from './allSagas';

const persistConfig = {
  key: 'seeEvent',
  storage: AsyncStorage,
  timeout: null,
  whitelist: ['loginReducer', 'Home'],
};

const sagaMiddleware = reduxSaga();
const allMiddleware = applyMiddleware(logger, sagaMiddleware);

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(persistedReducer, allMiddleware);
export const persistedStore = persistStore(store);

sagaMiddleware.run(allSaga);
