import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Title from './Title'
import TaskForm from './TaskForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />}></Route>
          <Route path="/form" element={<TaskForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
