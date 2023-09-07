import React from 'react'
import DoneButton from './DoneButton'

function StartDateInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div>
      <p>When do you want to start working towards your goal?</p>
      <input
        type="date"
        name="startDate"
        value={inputData.startDate}
        onChange={handleChange}
        aria-label="Start date"
      ></input>
      <DoneButton formProgressSetter={formProgressSetter} number={7} />
    </div>
  )
}

export default StartDateInput
