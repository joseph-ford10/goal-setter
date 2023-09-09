import React from 'react'
import dayjs from 'dayjs'

function Results({ inputData, setInputData, targetType, formProgressSetter }) {
  const calculation = () => {
    if (targetType === 'targetEndDate') {
      const startDate = new dayjs(inputData.startDate)
      const formattedStart = startDate.format('dddd DD MMMM YYYY')
      const endDate = new dayjs(inputData.endDate)
      const formattedEnd = endDate.format('dddd DD MMMM YYYY')
      const dayDiff = endDate.diff(startDate, 'day')
      const dailyUnits = Math.round(inputData.unitsNum / dayDiff)
      return `To complete ${inputData.task} by ${formattedEnd} starting ${formattedStart}, you will need to complete ${dailyUnits}
          ${inputData.unitsName} per day.`
    } else {
      const startDate = new dayjs(inputData.startDate)
      const formattedStart = startDate.format('dddd DD MMMM YYYY')
      const daysToComplete = Math.round(
        inputData.unitsNum / inputData.unitsPerDay
      )
      const endDate = startDate.add(daysToComplete, 'd')
      const formattedEnd = endDate.format('dddd DD MMMM YYYY')
      return `At ${inputData.unitsPerDay} ${inputData.unitsName} per day, starting on ${formattedStart}, it will
          take you ${daysToComplete} days to complete ${inputData.task}. This means
          you will finish on ${formattedEnd}`
    }
  }

  return (
    <div className="fadeIn">
      <p>{calculation()}</p>
      <p>Isn't that motivating?</p>
      <button
        onClick={() => {
          formProgressSetter(1)
          setInputData({
            task: '',
            unitsNum: '',
            unitsName: '',
            endDate: '',
            unitsPerDay: '',
            startDate: '',
          })
        }}
      >
        Start Again
      </button>
    </div>
  )
}

export default Results
