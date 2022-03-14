import {put, takeLatest} from 'redux-saga/effects';
import {apiLogin} from '../../Home/redux/api';
import {Alert} from 'react-native';

export function* loginSaga(action) {
  try {
    const res = yield apiLogin(action.payload);
    console.log(res, '1');
    if (res && res.data) {
      console.log('2');
      yield put({type: 'loginSuccess', payload: res.data.result.token});
    } else {
      yield put({type: 'loginFailed'});
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    Alert.alert('email atau password salah');
    yield put({type: 'loginFailed'});
  }
}

export function* LoginSaga() {
  yield takeLatest('login', loginSaga);
}
