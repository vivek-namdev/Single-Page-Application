import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div>
      Allen | Class 11 | Class 12
      <BrowserRouter>
      <Routes>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
        <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

function Landing() {
  return (
    <div>
      Welcome to allen
    </div>
  )
}

function Class11Program() {
  return (
    <div>
      Neet Program For Class 11
    </div>
  )
}

function Class12Program() {
  return (
    <div>
      Neet Program For Class 12
    </div>
  )
}

export default App
