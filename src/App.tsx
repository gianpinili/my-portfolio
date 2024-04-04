import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
function App() {

  return (
    <>
     <BrowserRouter>
     <Nav />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
