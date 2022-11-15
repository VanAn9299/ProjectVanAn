import React, { Component } from 'react'
import { connect } from "react-redux/es/exports";
import Search from './Search/Search';
import './Weather.css'
import WeekAndDay from './WeekAndDay/WeekAndDay'
class Weather extends Component {
  render() {
    return (
      <div className='BoxWeather'>
        <Search/>
        <WeekAndDay/>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    WeatherReducer: state.Reducer,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  
    ActionCallProductSaga: () => {
      dispatch({ type: "getDataWeather" })
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Weather);