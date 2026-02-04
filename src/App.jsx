import { useState } from 'react'
import Header from './header'   // <-- NOTE: capital H
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Interested in matching with a club? Welcome to the right place!
        </p>
        <div style={{ height: '1000px' }}></div> {/* just to scroll */}
      </main>
    </>
  )
}

export default App
