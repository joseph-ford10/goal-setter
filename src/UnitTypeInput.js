import React from 'react'
import DoneButton from './DoneButton'

function UnitTypeInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div className="fadeIn">
      <p>
        What kind of daily target do you want to set for completing{' '}
        <em>{inputData.task}</em>?
      </p>
      <input
        type="text"
        name="unitsName"
        value={inputData.unitsName}
        onChange={handleChange}
        aria-label="Name of units"
        placeholder="e.g. pages, minutes, locations"
      ></input>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={3} />
      </div>
    </div>
  )
}

export default UnitTypeInput
