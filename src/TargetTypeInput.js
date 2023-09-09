import React from 'react'
import DoneButton from './DoneButton'

function targetTypeInput({ formProgressSetter, setTargetType }) {
  return (
    <div className="fadeIn">
      <p>Would you like to set an end date or a daily target?</p>
      <div className="radioButtons">
        <label className="radioItem1">
          <input
            type="radio"
            name="targetType"
            value="targetEndDate"
            onChange={(e) => setTargetType(e.target.value)}
          ></input>
          <div>End Date</div>
        </label>
        <label className="radioItem2">
          <input
            type="radio"
            name="targetType"
            value="dailyTarget"
            onChange={(e) => setTargetType(e.target.value)}
          ></input>
          <div>Daily Goal</div>
        </label>
      </div>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={5} />
      </div>
    </div>
  )
}

export default targetTypeInput
