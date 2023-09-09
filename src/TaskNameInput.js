import React from 'react'
import DoneButton from './DoneButton'

function TaskNameInput({ inputData, handleChange, formProgressSetter }) {
  return (
    <div className="fadeIn">
      <p>What is the name of your task?</p>{' '}
      <p>
        This might be the name of a project you want to complete, a book you
        want to read, or something else.
      </p>
      <input
        type="text"
        name="task"
        value={inputData.task}
        onChange={handleChange}
        aria-label="Task"
      ></input>
      <div>
        <DoneButton formProgressSetter={formProgressSetter} number={2} />
      </div>
    </div>
  )
}

export default TaskNameInput
