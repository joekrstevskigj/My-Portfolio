import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavigationMenu from './Components/NavigationMenu';
import MyPhoto from './assets/My_Photo.png';

function App() {


  return (
    <div>
      <header>
        <NavigationMenu />
      </header>
      <main>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <img src={MyPhoto} alt='Profile image of the Developer' style={{width:"180px", height:"100%"}} 
              className='rounded-circle border border-dark p-1' />
              <h3>
                Gjorgji Krstevski
              </h3>
              <h5>A Full Stack Web Developer</h5>
              <h5>With game developer and mobile application background</h5>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
