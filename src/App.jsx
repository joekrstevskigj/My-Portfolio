import './App.css'
import HomePage from './Components/HomePage';
import ErrorPage from './Components/ErrorPage';
import Layout from './Components/Layout';

import { Routes, Route } from "react-router-dom";
import Projects from './Components/Projects';
import GameProjects from './Components/GameProjects';
import Contact from './Components/Contact';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
        <Route path='gameprojects' element={<GameProjects />} />
        <Route path="projects" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}
{/*  */}
export default App
