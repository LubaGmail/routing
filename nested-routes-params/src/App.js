import './App.css';
import React from 'react'
import {
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,
  useParams,
  useNavigate,
  useSearchParams,
  BrowserRouter
} from 'react-router-dom';

const users = [
  { id: '1', fullName: 'Alain Delon' },
  { id: '2', fullName: 'Jean Marais' },
];

function App() {

  return (
    <div className='App'>
      <h3 style={{backgroundColor: '#FFFAA0', padding: '1rem'}}>Nested Routes with Params</h3>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
             <Route path=":userId" element={<User />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

    </div>
  );
}

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      <nav>
        <NavLink to="/home" style={style}>
          Home
        </NavLink>    &nbsp; &nbsp;
        <NavLink to="/users" style={style}>
          Users
        </NavLink>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>

    </>      
  )
}

const Home = () => {
  return (
    <>
      <h4>Home</h4>
    </>
  )
}

const Users = ({users}) => {
  return (
    <>
        <div className='users'>
        {
          users.map((user) => (
            <li key={user.id}>
              <Link to={user.id}>{user.fullName}</Link>
            </li>
          ))
        }
      </div>

      <Outlet />
    </>
  )
}
const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>

      <Link to="/users">Back to Users</Link>
    </>
  );
};

const NoMatch = () => {
  return (
    <p>There's nothing here: 404!</p>
  );
};

export default App;
