// takeLatest,
import { call, put, takeEvery } from 'redux-saga/effects'
var apiKey = "439d4b804bc8187953eb36d2a8c26a02"

async function GetSearchWeather(keyInput) {
    var res = await fetch(`https://openweathermap.org/data/2.5/find?q=${keyInput}&appid=${apiKey}`)
    // console.log(res);
    var DataWeather = await res.json()
    // console.log(DataWeather);
    return DataWeather
}
function* getSearchData({ payload }) {
    var lsWeather = yield call(GetSearchWeather, payload)
    yield put({ type: "weather", payload: lsWeather })
}
async function getCityData(lat, lon, nameCity) {
    var res = await fetch(`https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    // console.log(res);
    // console.log(lat, lon);
    var dataCity = await res.json()
    // console.log(dataCity);
    return { ...dataCity, nameCity }
}

function* getSaoCityData({ type, payload }) {
    // console.log(payload);
    var lsCity = yield call(getCityData, payload.lat, payload.lon, payload.nameCity)
    yield put({ type: "City", payload: lsCity })

}
function* getSaoTimeData({ type, payload }) {
    // console.log(payload);
    var lsTime = yield call(getCityData, payload.lat, payload.lon, payload.nameCity)
    yield put({ type: "Time", payload: lsTime })

}
function* getSaoWeekData({ type, payload }) {
    // console.log(payload);
    var lsWeek = yield call(getCityData, payload.lat, payload.lon, payload.nameCity)
    yield put({ type: "Weed", payload: lsWeek })

}
function GetIndexData(i, iDay) {
    console.log(i, iDay);
    return {i, iDay}
}
function* getSao1WeekData({ type, payload }) {
    // console.log(payload);
    var lsWeekIndex = yield call(GetIndexData, payload.i, payload.iDay)
    console.log(lsWeekIndex)
    yield put({ type: "GetIndexDay", payload: lsWeekIndex })

}
function* mySaga() {
    yield takeEvery("getSearchDataSaga", getSearchData)
    yield takeEvery("SetCityDataCallSaga", getSaoCityData)
    yield takeEvery("SetCityDataCallSaga", getSaoTimeData)
    yield takeEvery("SetCityDataCallSaga", getSaoWeekData)
    yield takeEvery("SetWeekDataCallSaga", getSao1WeekData)
}


export default mySaga