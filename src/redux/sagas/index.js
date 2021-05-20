import {takeLatest ,call, put} from "redux-saga/effects";
import * as actions from '../action';
import * as api from '../../api';
function* mySaga(){
    yield takeLatest(actions.getPost.getPostRequest, fetchPostSaga)
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

function* fetchPostSaga(action) {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPost.getPostSuccess(posts.data))

}


function* createPostSaga(action) {
    try {
      const post = yield call(api.createPost, action.payload);
      yield put(actions.createPost.createPostSuccess(post.data));
    } catch (err) {
      console.error(err);
      yield put(actions.createPost.createPostFailure(err));
    }
  }
  
  function* updatePostSaga(action) {
    try {
      const updatedPost = yield call(api.updatePost, action.payload);
      yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
    } catch (err) {
      console.error(err);
      yield put(actions.updatePost.updatePostFailure(err));
    }
  }

export default mySaga; 
