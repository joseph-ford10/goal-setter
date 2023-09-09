import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import TaskForm from './TaskForm'
import Heading from './Heading'

function App() {
  return (
    <div className="App">
      <Heading />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form" element={<TaskForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
