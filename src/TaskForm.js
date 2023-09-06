import React, { useState } from 'react'
import DoneButton from './DoneButton'

function TaskForm() {
  const [inputData, setInputData] = useState({
    task: '',
    unitsNum: '',
    unitsName: '',
    endDate: '',
    unitsPerDay: '',
    startDate: '',
  })

  const [formProgress, setFormProgress] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
    console.log(inputData)
  }

  const handleDone = (e) => {
    e.preventDefault()
    console.log('Hello world!')
  }

  const formProgressSetter = (num) => {
    setFormProgress(num)
  }

  return (
    <>
      <form>
        {formProgress > 0 && (
          <div>
            <p>
              What is the name of your task? This might be the name of a project
              you want to complete, a book you want to read, or something else.
            </p>
            <input
              type="text"
              name="task"
              value={inputData.task}
              onChange={handleChange}
              aria-label="Task"
            ></input>
            <DoneButton formProgressSetter={formProgressSetter} number={2} />
          </div>
        )}
        {formProgress > 1 && (
          <div>
            <p>
              What kind of daily target do you want to set for completing your
              task? You might use a time unit like "minutes" or a different unit
              like "pages".
            </p>
            <input
              type="text"
              name="unitsName"
              value={inputData.unitsName}
              onChange={handleChange}
              aria-label="Name of units"
            ></input>
            <DoneButton formProgressSetter={formProgressSetter} number={3} />
          </div>
        )}
        {formProgress > 2 && (
          <div>
            <p>
              How many {inputData.unitsName} will it take in total to complete
              your task?
            </p>
            <input
              type="number"
              name="unitsNum"
              value={inputData.unitsNum}
              onChange={handleChange}
              aria-label="Number of units:"
            ></input>
            <DoneButton formProgressSetter={formProgressSetter} number={4} />
          </div>
        )}
        {formProgress > 3 && (
          <div>
            <p>What is your end date?</p>
            <input
              type="date"
              name="endDate"
              value={inputData.endDate}
              onChange={handleChange}
              aria-label="End date"
            ></input>
            <DoneButton formProgressSetter={formProgressSetter} number={5} />
          </div>
        )}
        {formProgress > 3 && (
          <div>
            <p>How many {inputData.unitsName} per day can you do?</p>
            <input
              type="number"
              name="unitsPerDay"
              value={inputData.unitsPerDay}
              onChange={handleChange}
              aria-label="Units per day"
            ></input>
            <DoneButton formProgressSetter={formProgressSetter} number={5} />
          </div>
        )}
        {formProgress > 4 && (
          <div>
            <p>When do you want to start working towards your goal?</p>
            <input
              type="date"
              name="startDate"
              value={inputData.startDate}
              onChange={handleChange}
              aria-label="Start date"
            ></input>
            <DoneButton formProgressSetter={formProgressSetter} number={6} />
          </div>
        )}
      </form>
    </>
  )
}

export default TaskForm
