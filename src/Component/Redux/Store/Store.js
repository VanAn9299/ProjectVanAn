import mySaga from '../Saga/Saga'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'
import WeatherReducer from '../Reducer/SearchReducer'
import CityReducer from '../Reducer/CityReducer'
import WeekReducer from '../Reducer/WeekReducer'
import TimeReducer from '../Reducer/TimeReducer'
var redux = require("redux")
const allReducer = redux.combineReducers({
    Weather: WeatherReducer,
    City: CityReducer,
    Week: WeekReducer,
    Time: TimeReducer
})
const sagaMiddleware = createSagaMiddleware()
const store = redux.createStore(
    allReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)
export default store;