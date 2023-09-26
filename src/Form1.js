import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dots from './Dots'

const Form1 = ({ text, inputData, handleChange }) => {
  const navigate = useNavigate()

  return (
    <>
      <h2 className="welcomeMessage">Details</h2>
      <p className="formText">{text}</p>
      <div className="inputContainer">
        <input
          type="text"
          name="title"
          value={inputData.title}
          onChange={handleChange}
          aria-label="Title"
          placeholder="e.g. Lord of the Rings"
        ></input>
      </div>
      <Dots pageNum={1} />
      <section className="buttonContainer">
        <button onClick={() => navigate('/form/page2')}>Next</button>
      </section>
    </>
  )
}

export default Form1
