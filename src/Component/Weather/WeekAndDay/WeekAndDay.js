import React from 'react'
import Day from './Day/Day'
import Week from './Week/Week'
import './WeekAndDay.css'

export default function WeekAndDay() {
  return (
    <div className='BoxWeek'>
        <Week/>
        <Day/>
    </div>
  )
}
