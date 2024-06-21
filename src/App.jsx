import './App.css'
import LifeCounter from './pages/LifeCounter.jsx';
import Search from './pages/Search.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Search/>}/>
      <Route path="/life-counter" element={<LifeCounter/>}/>

      </Routes>
    </>
  )
}

export default App
