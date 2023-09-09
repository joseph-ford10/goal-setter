import React from 'react'
import DoneButton from './DoneButton'

function TotalUnitsInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div className="fadeIn">
      <p>
        How many {inputData.unitsName} will it take in total to complete your
        task?
      </p>
      <input
        type="number"
        name="unitsNum"
        value={inputData.unitsNum}
        onChange={handleChange}
        aria-label="Number of units:"
      ></input>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={4} />
      </div>
    </div>
  )
}

export default TotalUnitsInput
