import React from 'react'
import DoneButton from './DoneButton'

function TotalUnitsInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div className="fadeIn">
      <p>
        How many {inputData.unitsName} will it take in total to complete{' '}
        {inputData.task}?
      </p>
      <input
        type="number"
        name="unitsNum"
        value={inputData.unitsNum}
        onChange={handleChange}
        aria-label="Number of units:"
        placeholder="enter a number"
      ></input>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={4} />
      </div>
    </div>
  )
}

export default TotalUnitsInput
