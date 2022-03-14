import {combineReducers} from 'redux';
import loginReducer from '../Screen/SignIn/redux/loginReducer';
import Home from '../Screen/Home/redux/reducer';

export const allReducers = combineReducers({
  loginReducer,
  Home,
});
