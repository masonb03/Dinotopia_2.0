import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Landing"
import Navbar from "./components/UI/Navbar"
import Footer from "./Components/UI/Footer"
import DinoDetails from "./pages/DinoDetails"
import Browse from "./pages/Browse"

function App() {

  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/dino/:id" element={<DinoDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
