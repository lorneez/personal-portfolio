import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Bio from './pages/Bio'
import Projects from './pages/Projects'
import Career from './pages/Career'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
