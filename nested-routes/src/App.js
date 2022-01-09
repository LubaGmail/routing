import './App.css';
import React from 'react'
import {Link, Routes, Route, useParams,} from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <h3 style={{backgroundColor: '#FFFAA0', padding: '1rem'}}>Nested Routes</h3>

      <Nav />

      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Users/*" element={<Users />} />
      </Routes>
    </div>
  );
}

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='home'>Home</Link> | &nbsp;
      <Link to='users'>Users</Link>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <h4>Home</h4>
    </>
  )
}

const Users = () => {
  return (
    <div className='users'>
      <ul>
        <li>
          <Link to='DefaultUser'>Default User</Link>
        </li>
        <li>
          <Link to='AdminUser'>Admin User User</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path='DefaultUser' element={<DefaultUser />} />
          <Route path='AdminUser' element={<AdminUser />} />
        </Routes>
      </div>
    </div>
  )
}

const DefaultUser = () => {
  return (
    <div className='nestedUser'>
      <h4>Default User</h4>
    </div>
  );
};

const AdminUser = () => {
  return (
    <div className='nestedUser'>
      <h4>Admin User</h4>
    </div>
  );
};

export default App;
