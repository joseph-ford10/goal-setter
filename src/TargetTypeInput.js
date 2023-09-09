import React from 'react'
import DoneButton from './DoneButton'

function targetTypeInput({ formProgressSetter, setTargetType }) {
  return (
    <div className="fadeIn">
      <p>Would you like to set a target end date or a daily progress target?</p>
      <div className="radioButtons">
        <label className="radioItem">
          <input
            type="radio"
            name="targetType"
            value="targetEndDate"
            onChange={(e) => setTargetType(e.target.value)}
          ></input>
          <div>Target End Date</div>
        </label>
        <label className="radioItem">
          <input
            type="radio"
            name="targetType"
            value="dailyTarget"
            onChange={(e) => setTargetType(e.target.value)}
          ></input>
          <div>Daily Target</div>
        </label>
      </div>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={5} />
      </div>
    </div>
  )
}

export default targetTypeInput
