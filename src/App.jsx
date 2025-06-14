import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Jobid from './components/Jobid'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<Jobid />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
