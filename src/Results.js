import React from 'react'
import dayjs from 'dayjs'

function Results({ inputData, setInputData, targetType, formProgressSetter }) {
  const finishedData = {
    startDate: '',
    daysToComplete: '',
    endDate: '',
    dailyUnits: '',
  }
  if (targetType === 'targetEndDate') {
    const startDate = new dayjs(inputData.startDate)
    finishedData.startDate = startDate.format('dddd DD MMMM YYYY')
    const endDate = new dayjs(inputData.endDate)
    finishedData.endDate = endDate.format('dddd DD MMMM YYYY')
    const dayDiff = endDate.diff(startDate, 'day')
    finishedData.dailyUnits = Math.round(inputData.unitsNum / dayDiff)
  } else if (targetType === 'dailyTarget') {
    const startDate = new dayjs(inputData.startDate)
    finishedData.startDate = startDate.format('dddd DD MMMM YYYY')
    finishedData.daysToComplete = Math.round(
      inputData.unitsNum / inputData.unitsPerDay
    )
    const endDate = startDate.add(finishedData.daysToComplete, 'd')
    finishedData.endDate = endDate.format('dddd DD MMMM YYYY')
  }

  return (
    <>
      {targetType === 'targetEndDate' && (
        <>
          <p className="fadeIn">
            To complete <em>{inputData.task}</em> by{' '}
            <strong>{finishedData.endDate}</strong>...
          </p>
          <p className="fadeIn">
            Starting on <strong>{finishedData.startDate}</strong>...
          </p>
          <p className="fadeIn">
            You will need to complete{' '}
            <strong>
              {finishedData.dailyUnits} {inputData.unitsName}
            </strong>{' '}
            per day.
          </p>
          <p className="fadeIn">Happy reading!</p>
          <button
            className="fadeIn"
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
        </>
      )}
      {targetType === 'dailyTarget' && (
        <>
          <p className="fadeIn">
            Completing{' '}
            <strong>
              {inputData.unitsPerDay} {inputData.unitsName}
            </strong>{' '}
            per day...
          </p>
          <p className="fadeIn">
            Starting on <strong>{finishedData.startDate}</strong>...
          </p>
          <p className="fadeIn">
            It will take you <strong>{finishedData.daysToComplete}</strong> days
            to complete <em>{inputData.task}.</em>
          </p>
          <p className="fadeIn">
            This means you'll finish on <strong>{finishedData.endDate}</strong>.
          </p>
          <p className="fadeIn">Happy reading!</p>
          <button
            className="fadeIn"
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
        </>
      )}
    </>
  )
}

export default Results
