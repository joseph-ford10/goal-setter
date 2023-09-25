import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Welcome from './Welcome'
import BookForm from './BookForm'
import TopIcon from './TopIcon'

function App() {
  return (
    <>
      <Header />
      <TopIcon />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/form" element={<BookForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
