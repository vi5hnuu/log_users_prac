import { Fragment } from 'react';
import './App.css';
import UserDetailForm from './Components/UserDetailForm';
import UserList from './Components/UserList';

function App() {
  return <Fragment>
    <UserDetailForm />
    <UserList />
    <footer>&copy;copyright 2023 (vishnu kumar)</footer>
  </Fragment>
}

export default App;
