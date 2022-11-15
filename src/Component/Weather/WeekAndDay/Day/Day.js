import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from "react-redux/es/exports";
import './Day.css'
function Day(props) {
  console.log(props.WeekReducer);
  const [indexDay, setindexDay] = useState(null);
  const [indexDay2, setindexDay2] = useState(null);

  useEffect(() => {
    if (props.WeekReducer.iDay && props.WeekReducer.lsWeek.lsDayForCast[props.WeekReducer.i]) {
      setindexDay(props.WeekReducer.iDay)
      setindexDay2(props.WeekReducer.lsWeek.lsDayForCast[props.WeekReducer.i])
    }
  }, [props.WeekReducer.iDay, props.WeekReducer.i, props.WeekReducer.lsWeek.lsDayForCast])
  return (

    <div className='boxDay'>
      <h1>{indexDay && indexDay}</h1>
      <div className='divDayH3'>
        {indexDay2 &&
          Object.keys(indexDay2.detail).map((n, i) => {
            return (
              <div className='cardInDay' key={"c" + i}>
                <h3 className='dayH3'>{n}</h3>
                {
                  Object.keys(indexDay2.detail[n]).map((n2, i2) => {
                    return (
                      <p key={"a" + i2}>{n2} : {indexDay2.detail[n][n2]}</p>
                    )
                  })
                }
              </div>
            )
          })
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


export default connect(mapStateToProps)(Day);