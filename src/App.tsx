import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Home";
import Play from "./pages/Play";

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Play' element={<Play/>} />
    </Routes>
  </BrowserRouter>
 )
}

export default App
