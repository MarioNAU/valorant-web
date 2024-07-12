import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Home";
import Play from "./pages/Play";
import Agents from "./pages/Agents";
import Battlepass from "./pages/Battlepass";
import Coleccion from './pages/Coleccion';
import Carrera from './pages/Carrera';
import { AgentsProvider } from "./context/Datacontext";


function App() {
 return (
  <BrowserRouter>
    <AgentsProvider>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Play' element={<Play/>} />
      <Route path='Battlepass' element={<Battlepass/>}/> 
      <Route path='/Agents' element={<Agents/>}/>
      <Route path='/Carrera' element={<Carrera/>}/>
      <Route path='/Coleccion' element={<Coleccion/>}/>
    </Routes>
    </AgentsProvider>
  </BrowserRouter>
 )
}

export default App
