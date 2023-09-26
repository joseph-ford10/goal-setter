import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form5 = ({ formText, inputData, handleChange, text }) => {
  const navigate = useNavigate()
  return (
    <>
      <p className="formText">{text}</p>
      <div className="inputContainer">
        <input
          type="date"
          name="startDate"
          value={inputData.startDate}
          onChange={handleChange}
          aria-label="Start date:"
          placeholder="Enter your start date"
          className="dateInput"
        ></input>
      </div>
      <section className="buttonContainer">
        <button onClick={() => navigate('/form/summary')}>Hello World</button>
      </section>
    </>
  )
}

export default Form5
