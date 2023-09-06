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
          <input
            type="text"
            name="task"
            value={inputData.task}
            onChange={handleChange}
            aria-label="Task"
          ></input>
        </div>
        <div>
          <input
            type="number"
            name="unitsNum"
            value={inputData.unitsNum}
            onChange={handleChange}
            aria-label="Number of units:"
          ></input>
          <input
            type="text"
            name="unitsName"
            value={inputData.unitsName}
            onChange={handleChange}
            aria-label="Name of units"
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
