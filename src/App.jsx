import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* HMR Test Counter - يمكنك حذف هذا بعد الاختبار */}
      <div style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        zIndex: 9999,
        background: '#815b2d',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        fontSize: '18px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        <p>Count is {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            marginTop: '5px',
            padding: '5px 15px',
            background: '#c3934a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App