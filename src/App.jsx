import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurTeam from './pages/OurTeam'
import Blog from './pages/Blog'
import EightWeek from './pages/EightWeek'
import Membership from './pages/Membership'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/8-week" element={<EightWeek />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
