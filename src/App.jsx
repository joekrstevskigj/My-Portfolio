import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavigationMenu from './Components/NavigationMenu';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';


function App() {


  return (
    <div>
      <header>
        <NavigationMenu />
      </header>
      <main>
        <HomePage />
      </main>

      <Footer />
      
    </div>
  )
}

export default App
