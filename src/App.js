import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import TopIcon from './TopIcon'
import Welcome from './Welcome'
import BookForm from './BookForm'
import Form1 from './Form1'

function App() {
  return (
    <>
      <Header />
      <TopIcon />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="form/*" element={<BookForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
