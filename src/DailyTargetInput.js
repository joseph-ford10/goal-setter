import React from 'react'
import DoneButton from './DoneButton'

function DailyTargetInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div>
      <p>How many {inputData.unitsName} per day can you do?</p>
      <input
        type="number"
        name="unitsPerDay"
        value={inputData.unitsPerDay}
        onChange={handleChange}
        aria-label="Units per day"
      ></input>
      <DoneButton formProgressSetter={formProgressSetter} number={6} />
    </div>
  )
}

export default DailyTargetInput
