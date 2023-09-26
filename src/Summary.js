import React from 'react'
import { useNavigate } from 'react-router-dom'

const Summary = ({ targetType, inputData }) => {
  const titleTrimmer = (title) => {
    if (title.length < 20) {
      return title
    } else {
      const diff = title.length - 25
      console.log(diff)
      const trimmed1 = title.split('').slice(0, -diff)
      const trimmed2 = trimmed1.push('...').toString()
      console.log(trimmed2)
      return trimmed1
    }
  }

  const navigate = useNavigate()

  return (
    <>
      <h2 className="welcomeMessage">Summary</h2>
      <div className="summaryContainer">
        <div className="summaryRow">
          <div className="summaryBox">
            <h3>Title</h3>
            <p>{titleTrimmer(inputData.title)}</p>
            <button
              className="editButton"
              onClick={() => navigate('/form/page1')}
            >
              Edit
            </button>
          </div>
          <div className="summaryBox">
            <h3>No. of pages</h3>
            <p>{inputData.pages}</p>
            <button
              className="editButton"
              onClick={() => navigate('/form/page2')}
            >
              Edit
            </button>
          </div>
        </div>
        <div className="summaryRow">
          <div className="summaryBox">
            <h3>{targetType === 'endDate' ? 'End Date' : 'Daily Target'}</h3>
            <p>
              {targetType === 'endDate'
                ? inputData.endDate
                : inputData.pagesPerDay}
            </p>
            <button
              className="editButton"
              onClick={() => navigate('/form/page4')}
            >
              Edit
            </button>
          </div>
          <div className="summaryBox">
            <h3>Start date</h3>
            <p>{inputData.startDate}</p>
            <button
              className="editButton"
              onClick={() => navigate('/form/page5')}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <section className="buttonContainer">
        <button onClick={() => navigate('/form/result')}>Submit</button>
      </section>
    </>
  )
}

export default Summary
