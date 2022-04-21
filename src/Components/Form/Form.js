import React, { useEffect, useState } from 'react'
import './Form.css'

const Form = ({ setStartDate, setEndDate, setUserSubmit }) => {
  const[inputStartDate, setInputStartDate] = useState('')
  const[inputEndDate, setInputEndDate] = useState('')

  // useEffect(() => {findWeek()}, [inputStartDate !== ''])

  const handleStartDateChange = (event) => {
    setInputStartDate(event.target.value)
  }

  const handleEndDateChange = (event) => {
    setInputEndDate(event.target.value)
  }

  const submitDates = (inputStartDate, inputEndDate) => {
    setStartDate(inputStartDate)
    setEndDate(inputEndDate)
    setUserSubmit(true)
  }

  // const findWeek = () => {
  //   let weekDate = inputStartDate
  //   weekDate.setDate(weekDate.getDate() + 7)
  //   console.log(weekDate)
  // }

  return (
    <div>
      <h2>form</h2>
      <input className='start-date' type='date'  onChange={e => handleStartDateChange(e)} />
      <input className='end-date' type='date' onChange={e => handleEndDateChange(e)} />
      <button onClick={() => submitDates(inputStartDate, inputEndDate)} > Select Dates </button>
    </div>

  )
}

export default Form
