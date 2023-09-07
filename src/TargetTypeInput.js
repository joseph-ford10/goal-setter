import React from 'react'
import DoneButton from './DoneButton'

function targetTypeInput({ formProgressSetter, setTargetType }) {
  return (
    <div>
      <p>Would you like to set a target end date or a daily progress target?</p>
      <select
        id="targetType"
        name="targetType"
        onChange={(e) => {
          setTargetType(e.target.value)
        }}
      >
        <option value="-">-</option>
        <option value="targetEndDate">Target end date</option>
        <option value="dailyTarget">Daily target</option>
      </select>
      <DoneButton formProgressSetter={formProgressSetter} number={5} />
    </div>
  )
}

export default targetTypeInput
