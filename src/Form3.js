import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dots from './Dots'

const Form3 = ({
  text,
  handleChange,
  inputData,
  setTargetType,
  targetType,
}) => {
  const navigate = useNavigate()

  return (
    <>
      <h2 className="welcomeMessage">Details</h2>
      <p className="formText">{text}</p>
      <div className="radioButtons">
        <div
          className="radioButton"
          style={{
            borderColor: targetType === 'dailyTarget' ? 'lightgreen' : 'white',
          }}
        >
          <input
            type="radio"
            id="dailyTarget"
            name="targetType"
            onChange={(e) => {
              setTargetType('dailyTarget')
            }}
          ></input>
          <label for="dailyTarget" className="radioLabel">
            I know how many pages a day I want to read.
          </label>
        </div>
        <div
          className="radioButton"
          style={{
            borderColor: targetType === 'endDate' ? 'lightgreen' : 'white',
          }}
        >
          <input
            type="radio"
            id="endDate"
            name="targetType"
            onChange={(e) => {
              setTargetType('endDate')
            }}
          ></input>
          <label for="endDate" className="radioLabel">
            I know the date I want to be finished by.
          </label>
        </div>
      </div>
      <Dots pageNum={3} />
      <section className="buttonContainer">
        <button onClick={() => navigate('/form/page4')}>Next</button>
      </section>
    </>
  )
}

export default Form3
