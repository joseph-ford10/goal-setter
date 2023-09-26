import React from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

const Result = ({ inputData, targetType, setInputData }) => {
  const navigate = useNavigate()
  const finishedData = {
    startDate: '',
    daysToComplete: '',
    endDate: '',
    dailyPages: '',
  }
  if (targetType === 'endDate') {
    const startDate = new dayjs(inputData.startDate)
    finishedData.startDate = startDate.format('dddd DD MMMM YYYY')
    const endDate = new dayjs(inputData.endDate)
    finishedData.endDate = endDate.format('dddd DD MMMM YYYY')
    const dayDiff = endDate.diff(startDate, 'day')
    finishedData.dailyPages = Math.round(inputData.pages / dayDiff)
  } else if (targetType === 'dailyTarget') {
    console.log(`DAILY TAARGET`)
    const startDate = new dayjs(inputData.startDate)
    finishedData.startDate = startDate.format('dddd DD MMMM YYYY')
    finishedData.daysToComplete = Math.round(
      inputData.pages / inputData.pagesPerDay
    )
    const endDate = startDate.add(finishedData.daysToComplete, 'd')
    finishedData.endDate = endDate.format('dddd DD MMMM YYYY')
    console.log(finishedData)
  }
  return (
    <>
      <h2 className="welcomeMessage">Results</h2>
      <div className="resultsContainer">
        {targetType === 'endDate' && (
          <p className="resultText">
            To complete {inputData.title} by {finishedData.endDate} you'll need
            to read {finishedData.dailyPages} pages per day, starting on{' '}
            {finishedData.startDate}.
          </p>
        )}
        {targetType === 'dailyTarget' && (
          <>
            <p className="resultText">
              If you start reading {inputData.title} on {finishedData.startDate}{' '}
              and read {inputData.pagesPerDay} pages per day, you'll be finished
              on {finishedData.endDate}.
            </p>
            <p>Happy reading!</p>
          </>
        )}
      </div>
      <section className="buttonContainer">
        <button
          onClick={() => {
            navigate('/form/page1')
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
          Calculate Again
        </button>
      </section>
    </>
  )
}

export default Result
