import styles from './UserItem.module.css'

function UserItem(props) {
  return (<li className={styles['userItem']}>
    <p className={styles['userItem__name']}>Vishnu Kumar</p>
    <p className={styles['userItem__age']}>21 <span>Years</span></p>
  </li>)
}

export default UserItem;