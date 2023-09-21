import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import TaskForm from './TaskForm'
import Header from './Header'
import openBook from './open-book.png'
import rightArrow from './next.png'
import leftArrow from './back.png'
import bookStack from './bookStack.png'

function App() {
  return (
    <div className="App">
      <Header />
      <h2 className="welcomeMessage">Welcome</h2>
      <div className="bookImage">
        <img src={openBook} alt="A book icon" width="40" height="40"></img>
      </div>
      <div className="boxContainer">
        <div className="introBox">
          <img
            src={leftArrow}
            alt="Left-pointing arrow"
            width="20"
            height="20"
            className="leftArrow"
          ></img>
          <p className="introText">
            ReadingWell is a simple app for making and sticking to reading
            goals.
          </p>
          <img
            src={rightArrow}
            alt="Right-pointing arrow"
            width="20"
            height="20"
            className="rightArrow"
          ></img>
        </div>
      </div>
      <div className="carouselDots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <section className="startButton">
        <button>Get Started</button>
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

export default App
