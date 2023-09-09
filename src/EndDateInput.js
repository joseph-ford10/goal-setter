import React from 'react'
import DoneButton from './DoneButton'

function EndDateInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div className="fadeIn">
      <p>What is your target end date?</p>
      <input
        type="date"
        name="endDate"
        value={inputData.endDate}
        onChange={handleChange}
        aria-label="End date"
      ></input>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={6} />
      </div>
    </div>
  )
}

export default EndDateInput
