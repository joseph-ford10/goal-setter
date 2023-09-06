import React, { useState } from 'react'

function TaskForm() {
  const [inputData, setInputData] = useState({
    task: '',
    unitsNum: '',
    unitsName: '',
    endDate: '',
    unitsPerDay: '',
    startDate: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
    console.log(inputData)
  }

  return (
    <>
      <form>
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
        </div>
        <div>
          <p>
            What kind of daily target do you want to set for completing your
            task? You might set a number of minutes per day, a number of pages
            per day, or something else
          </p>
          <input
            type="text"
            name="unitsName"
            value={inputData.unitsName}
            onChange={handleChange}
            aria-label="Name of units"
          ></input>
        </div>
        <div>
          <p>
            How many of these units will it take in total to complete your task?
          </p>
          <input
            type="number"
            name="unitsNum"
            value={inputData.unitsNum}
            onChange={handleChange}
            aria-label="Number of units:"
          ></input>
        </div>
        <div>
          <input
            type="date"
            name="endDate"
            value={inputData.endDate}
            onChange={handleChange}
            aria-label="End date"
          ></input>
        </div>
        <div>
          <input
            type="number"
            name="unitsPerDay"
            value={inputData.unitsPerDay}
            onChange={handleChange}
            aria-label="Units per day"
          ></input>
        </div>
        <div>
          <input
            type="date"
            name="startDate"
            value={inputData.startDate}
            onChange={handleChange}
            aria-label="Start date"
          ></input>
        </div>
      </form>
    </>
  )
}

export default TaskForm
