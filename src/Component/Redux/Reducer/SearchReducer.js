//State Global
const InitialState = {
    lsWeather: [],
}
//Mặc định trả về phương thức quản lý State
const WeatherReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case "weather":
            return {
                ...state, lsWeather: payload
            }
            default:
                return state;
    }
}
export default WeatherReducer