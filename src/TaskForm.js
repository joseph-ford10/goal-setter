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
          <SubmitScreen
            targetType={targetType}
            inputData={inputData}
            handleSubmit={handleSubmit}
            formProgressSetter={formProgressSetter}
          />
        )}
        {formProgress === 8 && (
          <Results
            inputData={inputData}
            targetType={targetType}
            formProgressSetter={formProgressSetter}
          />
        )}
      </form>
    </>
  )
}

export default TaskForm
