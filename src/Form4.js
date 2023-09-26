import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form4 = ({ handleChange, inputData, targetType }) => {
  const navigate = useNavigate()

  return (
    <>
      {targetType === 'dailyTarget' && (
        <p className="formText">What is your daily page target?</p>
      )}
      {targetType === 'endDate' && (
        <p className="formText">What is your target end date?</p>
      )}
      <div className="inputContainer">
        {targetType === 'dailyTarget' && (
          <input
            type="number"
            name="pagesPerDay"
            value={inputData.pagesPerDay}
            onChange={handleChange}
            aria-label="Number of pages per day:"
            placeholder="Enter daily page target"
          ></input>
        )}
        {targetType === 'endDate' && (
          <input
            type="date"
            name="endDate"
            value={inputData.endDate}
            onChange={handleChange}
            aria-label="Target end date:"
            placeHolder="Enter target end date"
            className="dateInput"
          ></input>
        )}
      </div>
      <section className="buttonContainer">
        <button onClick={() => navigate('/form/page5')}>Hello World</button>
      </section>
    </>
  )
}

export default Form4
