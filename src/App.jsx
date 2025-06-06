import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  {/* <Route path="/headphones" element={<Headphones />} />
  <Route path="/speakers" element={<Speakers />} />
  <Route path="/earphones" element={<Earphones />} />
  <Route path="/cart" element={<Cart />} /> */}
    </Routes>
  )
}

export default App