import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Home";
import Play from "./pages/Play";
import Agents from "./pages/Agents";
import { AgentsProvider } from "./context/Datacontext";

function App() {
 return (
  <BrowserRouter>
    <AgentsProvider>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Play' element={<Play/>} />
      
      <Route path='/Agents' element={<Agents/>}/>
      
    </Routes>
    </AgentsProvider>
  </BrowserRouter>
 )
}

export default App
