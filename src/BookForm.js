import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
import Form5 from './Form5'
import Summary from './Summary'
import Result from './Result'

const BookForm = () => {
  const [inputData, setInputData] = useState({
    title: '',
    pages: '',
    endDate: '',
    pagesPerDay: '',
    startDate: '',
  })

  const [formProgress, setFormProgress] = useState(1)
  const [targetType, setTargetType] = useState('dailyTarget')

  const formText = {
    1: 'What is the name of the book you want to read?',
    2: `How many pages is ${inputData.title}?`,
    3: 'What type of target would you like to set?',
    4: 'What is your daily page target?',
    5: 'What is your target end date?',
    6: `When do you plan to start reading ${inputData.title}?`,
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
    console.log(inputData)
  }

  return (
    <>
      <div className="formContainer">
        <form>
          <Routes>
            <Route
              path="page1"
              element={
                <Form1
                  text={formText[1]}
                  handleChange={handleChange}
                  inputData={inputData}
                />
              }
            />
            <Route
              path="page2"
              element={
                <Form2
                  text={formText[2]}
                  handleChange={handleChange}
                  inputData={inputData}
                />
              }
            />
            <Route
              path="page3"
              element={
                <Form3
                  text={formText[3]}
                  handleChange={handleChange}
                  inputData={inputData}
                  setTargetType={setTargetType}
                  targetType={targetType}
                />
              }
            />
            <Route
              path="page4"
              element={
                <Form4
                  handleChange={handleChange}
                  inputData={inputData}
                  targetType={targetType}
                />
              }
            />
            <Route
              path="page5"
              element={
                <Form5
                  text={formText[6]}
                  handleChange={handleChange}
                  inputData={inputData}
                />
              }
            />
            <Route
              path="summary"
              element={
                <Summary inputData={inputData} targetType={targetType} />
              }
            />
            <Route
              path="result"
              element={
                <Result
                  inputData={inputData}
                  targetType={targetType}
                  setInputData={setInputData}
                />
              }
            />
          </Routes>
        </form>
      </div>
      <footer>
        <p>
          Icon made by{' '}
          <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from{' '}
          <a href="https://www.flaticon.com">flaticon.com</a>
        </p>
      </footer>
    </>
  )
}

export default BookForm
