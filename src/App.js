import { Fragment, useState } from 'react';
import './App.css';
import UserDetailForm from './Components/UserDetailForm';
import UserList from './Components/UserList';

const ini_users = [
  { id: 'u4', name: 'vishnu', age: 21 },
]
function App() {
  const [users, setUsers] = useState(ini_users)

  function onAddUser(user) {
    setUsers(oldUsers => [user, ...oldUsers])
  }
  return <Fragment>
    <UserDetailForm onAddUser={onAddUser} />
    <UserList users={users} />
    <footer>&copy;copyright 2023 (vishnu kumar)</footer>
  </Fragment>
}

export default App;
