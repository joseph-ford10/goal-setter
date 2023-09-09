import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate()
  const pageChange = () => {
    navigate('/form')
  }

  const [introText, setIntroText] = useState(1)

  return (
    <>
      <section>
        {introText === 1 && (
          <div className="fadeIn">
            <p>Welcome to Goal Setter.</p>
            <button className="nextButton" onClick={() => setIntroText(2)}>
              Next
            </button>
          </div>
        )}
        {introText === 2 && (
          <div className="fadeIn">
            <p>
              Goal Setter is a motivational tool for completing projects or
              tasks. It works in two ways.
            </p>
            <button className="nextButton" onClick={() => setIntroText(3)}>
              Next
            </button>
          </div>
        )}
        {introText === 3 && (
          <div className="fadeIn">
            <p>
              You can set a daily target and have Goal Setter tell you how long
              it will take you to complete your task if you stick to that
              target.
            </p>
            <button className="nextButton" onClick={() => setIntroText(4)}>
              Next
            </button>
          </div>
        )}
        {introText === 4 && (
          <div className="fadeIn">
            <p>
              Or you can set a completion date and have Goal Setter tell you
              what your daily target should be if you want to be done in time.
            </p>
            <button className="nextButton" onClick={() => setIntroText(5)}>
              Next
            </button>
          </div>
        )}
        {introText === 5 && (
          <div className="fadeIn">
            <p>
              Sound good? All you have to do is enter some basic information
              about your project or task. Click below to get started.
            </p>
            <button className="nextButton" onClick={pageChange}>
              Next
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default Home
