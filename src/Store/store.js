import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import foodReducer from './favoriteSlice';

const AppReducers = combineReducers({
  favorite: foodReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorite'],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware),
);

export const persistor = persistStore(store);
