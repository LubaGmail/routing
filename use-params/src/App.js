import './App.css';
import {
  Routes,
  Route,
  Outlet,
  NavLink as Link,
  useParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import Dashboard from './Dashboard'

function App() {
 
  return (
    <div className="App">
   
     <nav className='main'>
        <h3>useParams Router v.6</h3><hr />
        <ul>
          <li>
    
            <Link to="/" end>Home</Link>
          </li>
          <li>
            <Link to="dashboard" >Dashboard</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

    </div>
  )
}

export const Home = () => {
  return(
    <>
      <h4>Home</h4>
    </>
  )
}
export const About = () => {
  return(
    <>
      <h4>About</h4>
    </>
  )
}
export const NotFound = () => {
  return(
    <>
      <h4>404</h4>
    </>
  )
}

export default App;
