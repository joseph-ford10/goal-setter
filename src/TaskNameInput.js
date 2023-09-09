import React from 'react'
import DoneButton from './DoneButton'

function TaskNameInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div className="fadeIn">
      <p>What is the name of the book you want to read?</p>{' '}
      <input
        type="text"
        name="task"
        value={inputData.task}
        onChange={handleChange}
        aria-label="Task"
        placeholder="e.g. Lord of the Rings"
      ></input>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={2} />
      </div>
    </div>
  )
}

export default TaskNameInput
