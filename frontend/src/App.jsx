
import {Routes,Route} from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Carrers from './pages/Carrers'
import Contact from './pages/Contact'

function App() {

  return (
    <Routes>
      <Route element={<PublicLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/carrers" element={<Carrers/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App
