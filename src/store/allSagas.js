// tempat untuk menmbungkus semua saga

import {all} from 'redux-saga/effects';
import { EventDetailSaga } from '../Screen/EventDetail/redux/saga';
import {HomeSaga} from '../Screen/Home/redux/saga';
import {LoginSaga} from '../Screen/SignIn/redux/saga';
import {signupSagas} from '../Screen/SignUp/redux/saga';


export function* allSaga() {
  yield all([LoginSaga(), HomeSaga(), signupSagas(), EventDetailSaga()]);
}
