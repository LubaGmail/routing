import './App.css';
import {
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
  BrowserRouter
} from 'react-router-dom';
import {
  History
} from 'react-router';

function App() {
  return (
    <div className="main">
      <h3>App</h3> <hr />

      <nav>
        <Link to='home'>Home</Link> &nbsp;
        <Link to='about'>About</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export const Home = () => {
  const location = useLocation();

  return (
    <div>
      <h4>Home</h4>
      <h5>location: {location.pathname}</h5>

    </div>
  )
}
export const About = () => {
  const location = useLocation();

  return (
    <div>
      <h4>About</h4>
      <h5>location: {location.pathname}</h5>
    </div>
  )
}
export const NotFound = () => {
  const location = useLocation();
  console.log(window.history)
  const navigate = useNavigate();

  return (
    <div>
      <h4>404</h4>
      <h5>location: {location.pathname}</h5>

      <button
       onClick={event => {
          event.preventDefault();
            navigate("/home")
          }}
      >
        Back to safety
      </button>

    </div>
  )
}

export default App;
