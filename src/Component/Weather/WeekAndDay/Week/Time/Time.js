import React from 'react'
import { connect } from "react-redux/es/exports";
import './Time.css'
function Time(props) {
  
  return (
    <div>
      {/* {JSON.stringify(props.TimeReducer)} */}
      {/* {console.log(props.TimeReducer.lsTime)} */}
      {

        props.TimeReducer.lsTime &&
        <div>
          <h1 className='Gio'>{props.TimeReducer.lsTime.currentTime}</h1>
          <p className='Ngay'>{props.TimeReducer.lsTime.detailtTime}</p>
          {console.log(props.TimeReducer.lsTime.nameCity)}

          <h1 className='welcome'>Welcome to {props.TimeReducer.lsTime.nameCity} City</h1>
         
        </div>
      }
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    CityReducer: state.City,
    TimeReducer: state.Time,
    WeatherReducer: state.Weather
  };
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     ProductFunc: (val) => {
//       dispatch({ type: "SetCityDataProduct", payload: val });
//     },
//     ActionCallCitySaga: (lat, lon) => {
//       dispatch({ type: "SetCityDataCallSaga", payload: { lat: lat, lon: lon } })
//     }
//   };
// };
export default connect(mapStateToProps)(Time);
// ,mapDispatchToProps cua dong ben tren