import {Alert} from 'react-native';
import {put, takeLatest} from 'redux-saga/effects';
import {apiSignUp} from '../../Home/redux/api';

export function* signupSaga(action) {
  try {
    const res = yield apiSignUp(action.payload);
    console.log(res, '1');
    if (res.status === 201) {
      console.log('2');
      yield put({type: 'loginSuccess', payload: res.data.result.token});
    } else {
      Alert.alert('SignUp gagal');
      yield put({type: 'loginFailed'});
    }
  } catch (e) {
    console.log('3');
    console.info('e', e);
    yield put({type: 'loginFailed'});
  }
}

export function* signupSagas() {
  yield takeLatest('signUp', signupSaga);
}
