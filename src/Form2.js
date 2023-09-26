import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dots from './Dots'

const Form2 = ({ text, handleChange, inputData }) => {
  const navigate = useNavigate()
  return (
    <>
      <h2 className="welcomeMessage">Details</h2>
      <p className="formText">{text}</p>
      <div className="inputContainer">
        <input
          type="number"
          name="pages"
          value={inputData.pages}
          onChange={handleChange}
          aria-label="Number of pages:"
          placeholder="enter a number"
        ></input>
      </div>
      <Dots pageNum={2} />
      <section className="buttonContainer">
        <button onClick={() => navigate('/form/page3')}>Next</button>
      </section>
    </>
  )
}

export default Form2
