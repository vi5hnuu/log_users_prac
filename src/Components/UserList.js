import EmptyItem from './EmptyItem';
import UserItem from './UserItem';
import styles from './UserList.module.css'

function UserList(props) {
  return <div className={styles['user-list-container']}>
    <div className={styles['user-list-header']}>
      <h2>User Logs</h2>
    </div>
    <ul className={styles['user-list']}>
      {props.users.length === 0 && <EmptyItem />}
      {props.users.map((user) => <UserItem key={user.id} name={user.name} age={user.age} />)}
    </ul>
  </div>
}

export default UserList;