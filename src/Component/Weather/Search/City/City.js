import React from 'react'
import { connect } from "react-redux/es/exports";
import './City.css'

function City(props) {
  const ClickCity = (lat, lon, nameCity) => {
    props.ActionCallCitySaga(lat, lon, nameCity)

  }
  const FtoC = (tempF) => {
    return Math.round(tempF - 273)
  }

  return (
    <div className='city' >
      {/* {console.log(props.WeatherReducer)} */}
      {
        props.WeatherReducer.lsWeather.length === 0 ? (
          ("")
        ) : <div >
          {/* {console.log(props.WeatherReducer.lsWeather.list)} */}
          {
            props.WeatherReducer.lsWeather.list.map((n, i) => {
              // console.log(n);
              return (
                <div key={i} className='cityCard' onClick={() => { ClickCity(n.coord.lat, n.coord.lon, n.name) }}>
                  <p><img alt='anh' src={`https://openweathermap.org/images/flags/${n.sys.country.toLowerCase()}.png`} />{n.name}</p>
                  {/* {console.log(n.sys.country.toLowerCase())} */}
                  <p><span>{FtoC(n.main.temp)}°C</span> temperature from {FtoC(n.main.temp_min)} to {FtoC(n.main.temp_max)} oC wind {n.wind.speed}m/s. clouds {n.clouds.all}%</p>
                  <p>Geo Coords [{n.coord.lat},{n.coord.lon}]</p>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    CityReducer: state.City,
    WeatherReducer: state.Weather
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ProductFunc: (val) => {
      dispatch({ type: "SetCityDataProduct", payload: val });
    },
    ActionCallCitySaga: (lat, lon, nameCity) => {
      dispatch({ type: "SetCityDataCallSaga", payload: { lat: lat, lon: lon, nameCity: nameCity} })
    },
    // ActionCallTimeSaga: (lat, lon) => {
    //   dispatch({ type: "SetCityDataCallSaga", payload: { lat: lat, lon: lon } })
    // },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(City);