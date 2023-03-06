import Empty_Item from './Empty_Item';
import UserItem from './UserItem';
import styles from './UserList.module.css'

function UserList() {
  return <div className={styles['user-list-container']}>
    <div className={styles['user-list-header']}>
      <h2>User Logs</h2>
    </div>
    <ul className={styles['user-list']}>
      <UserItem />
    </ul>
  </div>
}

export default UserList;