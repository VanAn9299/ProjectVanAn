import React from 'react'
import Time from './Time/Time'
import { connect } from "react-redux/es/exports";
import './Week.css'
function Week(props) {
  const ClickWeek = (i, iDay) => {
    props.ActionCallWeekSaga(i, iDay)
  }
  return (
    <div className='WeekBox'>
      <div>
        <Time />
      </div>
      <div>
        {props.WeekReducer.lsWeek.lsDayForCast &&
          <div className='eight-days'>
            {
              props.WeekReducer.lsWeek.lsDayForCast.map((n, i) => {
                return (
                  <div className='dayCard' key={i} onClick={() => { ClickWeek(i, n.dayInfo) }}>
                    <img alt='Anh Viet' src={`https://openweathermap.org/img/wn/${n.imgSrc}@2x.png`} />
                    <h1>{n.dayInfo.substring(0,3)}</h1>
                    <h3>{n.temp.toFixed()}<sup>o</sup></h3>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    WeekReducer: state.Week,
    TimeReducer: state.Time
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    ActionCallWeekSaga: (i, iDay) => {
      dispatch({ type: "SetWeekDataCallSaga", payload: { i: i, iDay: iDay } })
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Week);