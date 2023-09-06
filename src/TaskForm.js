import React, { useState } from 'react'
import DoneButton from './DoneButton'

function TaskForm() {
  const calculation = () => {
    if (targetType === 'targetEndDate') {
      const startDate = new Date(inputData.startDate)
      const endDate = new Date(inputData.endDate)
      const timeDiff = endDate.getTime() - startDate.getTime()
      const dayDiff = Math.abs(Math.floor(timeDiff / (1000 * 3600 * 24)))
      const finalNumber = Math.round(inputData.unitsNum / dayDiff)
      console.log(
        `To complete ${inputData.task}, you will need to complete ${finalNumber} ${inputData.unitsName} per day.`
      )
    } else {
      const startDate = new Date(inputData.startDate)
      const totalDays = inputData.unitsNum / inputData.unitsPerDay
      const roundedDays = Math.round(totalDays)
      const endDate = new Date(startDate)
      endDate.setDate(startDate.getDate() + roundedDays)
      console.log(
        `At ${inputData.unitsPerDay} ${inputData.unitsName} per day, it will take you ${roundedDays} days to 
        complete ${inputData.task}. This means you will finish on ${endDate}`
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    calculation()
  }

  const [inputData, setInputData] = useState({
    task: '',
    unitsNum: '',
    unitsName: '',
    endDate: '',
    unitsPerDay: '',
    startDate: '',
  })

  const [formProgress, setFormProgress] = useState(1)

  const [targetType, setTargetType] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
    console.log(inputData)
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
            <p>
              Would you like to set a target end date or a daily progress
              target?
            </p>
            <select
              id="targetType"
              name="targetType"
              onChange={(e) => {
                setFormProgress(5)
                setTargetType(e.target.value)
              }}
            >
              <option value="-">-</option>
              <option value="targetEndDate">Target end date</option>
              <option value="dailyTarget">Daily target</option>
            </select>
          </div>
        )}
        {formProgress > 4 && targetType === 'targetEndDate' && (
          <div>
            <p>What is your target end date?</p>
            <input
              type="date"
              name="endDate"
              value={inputData.endDate}
              onChange={handleChange}
              aria-label="End date"
            ></input>
            <DoneButton formProgressSetter={formProgressSetter} number={6} />
          </div>
        )}
        {formProgress > 4 && targetType === 'dailyTarget' && (
          <div>
            <p>How many {inputData.unitsName} per day can you do?</p>
            <input
              type="number"
              name="unitsPerDay"
              value={inputData.unitsPerDay}
              onChange={handleChange}
              aria-label="Units per day"
            ></input>
            <DoneButton formProgressSetter={formProgressSetter} number={6} />
          </div>
        )}
        {formProgress > 5 && (
          <div>
            <p>When do you want to start working towards your goal?</p>
            <input
              type="date"
              name="startDate"
              value={inputData.startDate}
              onChange={handleChange}
              aria-label="Start date"
            ></input>
            <DoneButton formProgressSetter={formProgressSetter} number={7} />
          </div>
        )}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default TaskForm
