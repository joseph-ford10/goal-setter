import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form3 = ({
  text,
  handleChange,
  inputData,
  setTargetType,
  targetType,
}) => {
  const navigate = useNavigate()
  const [testClick, setTestClick] = useState('no click')
  const [clicked, setClicked] = useState(false)

  return (
    <>
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
            onClick={() => setTestClick('click1')}
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
            onClick={() => setTestClick('click2')}
          ></input>
          <label for="endDate" className="radioLabel">
            I know the date I want to be finished by.
          </label>
        </div>
      </div>
      <section className="buttonContainer">
        <button onClick={() => navigate('/form/page4')}>Hello World</button>
      </section>
      <p>{testClick}</p>
    </>
  )
}

export default Form3
