import {put, takeLatest, select} from 'redux-saga/effects';
import {navigate} from '../../../Helper/navigate';
import {setStartingSoon, setDesignEvents, setExploreEvent} from './action';
import {apiEventStartingSoon, apiComment, apiEventByCategory} from './api';

function* getStartingSoonSaga() {
  try {
    const res = yield apiEventStartingSoon();
    console.log('kepanggil nih');
    if (res && res.data) {
      yield put(setStartingSoon(res.data.result));
      yield put(setExploreEvent(res.data.result));
      console.log(res, 'ini res dari starting soon');
    } else {
      console.log('error');
    }
  } catch (error) {
    console.log(error);
  }
}

function* getDesignEventsSaga() {
  try {
    const res = yield apiEventStartingSoon();
    console.log('kepanggil nih');
    if (res && res.data) {
      yield put(setDesignEvents(res.data.result));
      console.log(res, 'ini res dari design events');
    } else {
      console.log('error');
    }
  } catch (error) {
    console.log(error);
  }
}
function* getCommentSaga() {
  try {
    const res = yield apiComment();
    console.log('ini Api Comment');
    if (res && res.data) {
      yield put(setComment(res.data.result));
      console.log(res, 'ini comment');
    } else {
      console.log('error');
    }
  } catch (error) {
    console.log(error);
  }
}

function* getEventByCategorySaga(action) {
  try {
    const res = yield apiEventByCategory(action.catType);
    console.log(res, 'ini Api event by category');
    if (res && res.data) {
      yield put(setExploreEvent(res.data.result));
      navigate('eksplor');
      console.log(res, 'ini comment');
    } else {
      console.log('error');
    }
  } catch (error) {
    console.log(error);
  }
}

export function* HomeSaga() {
  yield takeLatest('GET_STARTING_SOON', getStartingSoonSaga);
  yield takeLatest('GET_DESIGN_EVENTS', getDesignEventsSaga);
  yield takeLatest('GET_COMMENT', getCommentSaga);
  yield takeLatest('GET_CATEGORY_BY_TYPE', getEventByCategorySaga);
}
