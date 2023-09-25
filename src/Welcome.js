import './App.css'
import openBook from './open-book.png'
import rightArrow from './next.png'
import leftArrow from './back.png'
import bookStack from './bookStack.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const [carousel, setCarousel] = useState(1)

  const carouselText = {
    1: 'ReadingWell is a simple app for making and sticking to reading goals.',
    2: 'You can set a daily page target and have ReadingWell tell you when you will complete the book based on that target.',
    3: 'Or you can set a target completion date and have ReadingWell tell you what your daily target should be.',
    4: 'Sound good? Click below to get started.',
  }

  const navigate = useNavigate()

  const goToForm = () => {
    navigate('/form')
  }

  return (
    <div className="App fadeIn">
      <h2 className="welcomeMessage">Welcome</h2>
      <div className="bookImage">
        <img src={openBook} alt="A book icon" width="40" height="40"></img>
      </div>
      <div className="boxContainer">
        <div className="introBox">
          <div style={{ width: '20px', height: '20px' }}>
            {carousel !== 1 && (
              <img
                src={leftArrow}
                alt="Left-pointing arrow"
                width="20"
                height="20"
                className="leftArrow"
                onClick={() => setCarousel(carousel - 1)}
              ></img>
            )}
          </div>
          <p className="introText">{carouselText[carousel]}</p>
          <div style={{ width: '20px', height: '20px' }}>
            {carousel !== 4 && (
              <img
                src={rightArrow}
                alt="Right-pointing arrow"
                width="20"
                height="20"
                className="rightArrow"
                onClick={() => setCarousel(carousel + 1)}
              ></img>
            )}
          </div>
        </div>
      </div>
      <div className="carouselDots">
        {Object.keys(carouselText).map((key) =>
          Number(key) === carousel ? (
            <div
              key={key}
              className="dot"
              style={{ backgroundColor: 'black' }}
              onClick={() => setCarousel(Number(key))}
            ></div>
          ) : (
            <div
              key={key}
              className="dot"
              onClick={() => setCarousel(Number(key))}
            ></div>
          )
        )}
      </div>
      <section className="startButton">
        <button onClick={goToForm}>Get Started</button>
      </section>
      <div className="bookStackImage">
        <img
          src={bookStack}
          alt="A stack of books"
          width="40"
          height="40"
          className="bookStack"
        ></img>
      </div>
      <footer>
        <p>
          Icon made by{' '}
          <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from{' '}
          <a href="https://www.flaticon.com">flaticon.com</a>
        </p>
        <p>
          Icon made by{' '}
          <a href="https://www.flaticon.com/authors/handicon">Handicon</a> from{' '}
          <a href="https://www.flaticon.com">flaticon.com</a>
        </p>
      </footer>
    </div>
  )
}

export default Welcome
