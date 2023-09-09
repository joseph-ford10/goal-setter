import React, { useState } from 'react'
import TaskNameInput from './TaskNameInput'
import UnitTypeInput from './UnitTypeInput'
import TotalUnitsInput from './TotalUnitsInput'
import TargetTypeInput from './TargetTypeInput'
import EndDateInput from './EndDateInput'
import DailyTargetInput from './DailyTargetInput'
import StartDateInput from './StartDateInput'
import SubmitScreen from './SubmitScreen'
import Results from './Results'

function TaskForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormProgress(8)
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
        {formProgress === 1 && (
          <TaskNameInput
            inputData={inputData}
            handleChange={handleChange}
            formProgressSetter={formProgressSetter}
          />
        )}
        {formProgress === 2 && (
          <UnitTypeInput
            inputData={inputData}
            handleChange={handleChange}
            formProgressSetter={formProgressSetter}
          />
        )}
        {formProgress === 3 && (
          <TotalUnitsInput
            inputData={inputData}
            handleChange={handleChange}
            formProgressSetter={formProgressSetter}
          />
        )}
        {formProgress === 4 && (
          <TargetTypeInput
            formProgressSetter={formProgressSetter}
            setTargetType={setTargetType}
          />
        )}
        {formProgress === 5 && targetType === 'targetEndDate' && (
          <EndDateInput
            inputData={inputData}
            handleChange={handleChange}
            formProgressSetter={formProgressSetter}
          />
        )}
        {formProgress === 5 && targetType === 'dailyTarget' && (
          <DailyTargetInput
            inputData={inputData}
            handleChange={handleChange}
            formProgressSetter={formProgressSetter}
          />
        )}
        {formProgress === 6 && (
          <StartDateInput
            inputData={inputData}
            handleChange={handleChange}
            formProgressSetter={formProgressSetter}
          />
        )}
        {formProgress === 7 && (
          <Results
            inputData={inputData}
            targetType={targetType}
            formProgressSetter={formProgressSetter}
            setInputData={setInputData}
          />
        )}
      </form>
    </>
  )
}

export default TaskForm
