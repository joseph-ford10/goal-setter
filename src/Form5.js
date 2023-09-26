import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dots from './Dots'

const Form5 = ({ formText, inputData, handleChange, text }) => {
  const navigate = useNavigate()
  return (
    <>
      <h2 className="welcomeMessage">Details</h2>
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
      <Dots pageNum={5} />
      <section className="buttonContainer">
        <button onClick={() => navigate('/form/summary')}>Next</button>
      </section>
    </>
  )
}

export default Form5
