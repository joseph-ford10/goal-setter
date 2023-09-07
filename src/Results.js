import React from 'react'

function Results({ inputData, targetType }) {
  const calculation = (inputData, targetType) => {
    if (targetType === 'targetEndDate') {
      const startDate = new Date(inputData.startDate)
      const endDate = new Date(inputData.endDate)
      const timeDiff = endDate.getTime() - startDate.getTime()
      const dayDiff = Math.abs(Math.floor(timeDiff / (1000 * 3600 * 24)))
      const finalNumber = Math.round(inputData.unitsNum / dayDiff)
      return `To complete ${inputData.task}, you will need to complete ${finalNumber} ${inputData.unitsName} per day.`
    } else {
      const startDate = new Date(inputData.startDate)
      const totalDays = inputData.unitsNum / inputData.unitsPerDay
      const roundedDays = Math.round(totalDays)
      const endDate = new Date(startDate)
      endDate.setDate(startDate.getDate() + roundedDays)
      return `At ${inputData.unitsPerDay} ${inputData.unitsName} per day, it will take you ${roundedDays} days to 
        complete ${inputData.task}. This means you will finish on ${endDate}`
    }
  }

  return <>{calculation}</>
}

export default Results
