import React from 'react'
import DoneButton from './DoneButton'

function StartDateInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div className="fadeIn">
      <p>
        When will you start reading <em>{inputData.task}</em>?
      </p>
      <input
        type="date"
        name="startDate"
        value={inputData.startDate}
        onChange={handleChange}
        aria-label="Start date"
      ></input>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={7} />
      </div>
    </div>
  )
}

export default StartDateInput
