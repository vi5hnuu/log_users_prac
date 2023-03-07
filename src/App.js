import { Fragment, useState } from 'react';
import './App.css';
import UserDetailForm from './Components/UserDetailForm';
import UserList from './Components/UserList';

const ini_users = [
  { id: 'u1', name: 'John', age: 21 },
  { id: 'u2', name: 'Karan', age: 21 },
  { id: 'u3', name: 'krishan', age: 21 },
  { id: 'u4', name: 'vishnu', age: 21 },
  { id: 'u5', name: 'laxmi', age: 21 },
  { id: 'u6', name: 'payal', age: 21 },
  { id: 'u7', name: 'vishal', age: 21 },
  { id: 'u8', name: 'manisha', age: 21 },
  { id: 'u9', name: 'parkash', age: 21 },
  { id: 'u10', name: 'mukesh', age: 21 },
  { id: 'u10', name: 'harsh', age: 21 },
  { id: 'u10', name: 'dayapal', age: 21 },
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
