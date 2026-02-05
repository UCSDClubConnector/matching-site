import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './header'
import Contact from './Contact'
import Clubs from './Clubs'  // Add this import
import './App.css'

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <div className="introText">
        <p>
          Hello, this is our project where we try to match you to clubs that you may be interested in. 
        </p>
      </div>
      <div className="card">
        <button onClick={() => navigate('/clubs')}>
          Click to be matched to a club!
        </button>
      </div>
      <p className="read-the-docs">
        Interested in matching with a club? Welcome to the right place!
      </p>
      <div style={{ height: '1000px' }}></div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: '2rem', paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />  {/* Add this route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App