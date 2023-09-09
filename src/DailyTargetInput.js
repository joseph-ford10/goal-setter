import React from 'react'
import DoneButton from './DoneButton'

function DailyTargetInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div className="fadeIn">
      <p>How many {inputData.unitsName} per day can you read?</p>
      <input
        type="number"
        name="unitsPerDay"
        value={inputData.unitsPerDay}
        onChange={handleChange}
        aria-label="Units per day"
      ></input>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={6} />
      </div>
    </div>
  )
}

export default DailyTargetInput
