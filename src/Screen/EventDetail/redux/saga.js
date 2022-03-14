import {put, takeLatest, select} from 'redux-saga/effects';
import {apiPostComment} from '../../Home/redux/api';
import {Alert} from 'react-native';
import Toast from 'react-native-toast-message';

function* getPostCommentSaga(action) {
  try {
    const token = yield select(state => state.loginReducer.token);
    const id = yield select(state => state.Home.detailEvent.eventId);

    console.log(token, 'dari saga');
    console.log(action.payload, 'ini testsaga');
    const res = yield apiPostComment(action.payload, token, id);
    console.log(res, 'data comment');
    if (res && res.data) {
      console.log(res, 'ini res dari comment');
    } else {
      console.log('error');
      Alert.alert('Comment gagal');
    }
  } catch (error) {
    console.log(error);
  }
}

export function* EventDetailSaga() {
  yield takeLatest('POST_COMMENT', getPostCommentSaga);
}
