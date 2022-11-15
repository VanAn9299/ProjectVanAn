//State Global
const InitialState = {
    lsCity: [],
}
//Mặc định trả về phương thức quản lý State
const CityReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case "City":
            return {
                ...state, lsCity: payload
            }
            default:
                return state;
    }
}
export default CityReducer