import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import CreatePost from './Components/CreatePost';
import NotFound from './Components/NotFound';

const App = () => {

  return (
    
    // BrowserRouter implementation uses the HTML5 History API which include pushState, 
    // replaceState and the popState event to keep our UI in sync with the URL
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> 

        {/* path name is not case sensitive */}
        <Route path="register" element={<Register />} /> 
        
        {/* <Link to="/login">Login</Link> */}
        <Route path="login" element={<Login />} />
        <Route path="createPost" element={<CreatePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
