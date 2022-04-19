import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import SignupPage from './pages/SignupPage/SignupPage'

function App() {
  return <Router>
    {/* <Link to="/">Home</Link>
    <Link to="/sign-up">Signup</Link>  */}
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/sign-up' element={<SignupPage/>} /> 
    </Routes>
  </Router>
}

export default App
