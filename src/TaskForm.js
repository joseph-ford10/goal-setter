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
        <label>Task:</label>
        <input
          type="text"
          name="task"
          value={inputData.task}
          onChange={handleChange}
        ></input>
        <label>Unit number:</label>
        <input
          type="number"
          name="unitsNum"
          value={inputData.unitsNum}
          onChange={handleChange}
        ></input>
        <label>Units name:</label>
        <input
          type="text"
          name="unitsName"
          value={inputData.unitsName}
          onChange={handleChange}
        ></input>
        <label>End date:</label>
        <input
          type="date"
          name="endDate"
          value={inputData.endDate}
          onChange={handleChange}
        ></input>
        <label>Units per day:</label>
        <input
          type="number"
          name="unitsPerDay"
          value={inputData.unitsPerDay}
          onChange={handleChange}
        ></input>
        <label>Start date:</label>
        <input
          type="date"
          name="startDate"
          value={inputData.startDate}
          onChange={handleChange}
        ></input>
      </form>
    </>
  )
}

export default TaskForm
