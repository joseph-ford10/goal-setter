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
      </form>
    </>
  )
}

export default TaskForm
