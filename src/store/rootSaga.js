
import { takeLatest, call } from 'redux-saga/effects'
import { logIn } from '../services/firebase.service'
function* rootSaga() {

    yield takeLatest("LOGIN", fetchData)
}

function* fetchData() {
    const loggedUser = yield call(logIn, "moniam@gmail.com", "1234567")
    console.log('testtt', loggedUser)

}

export default rootSaga

