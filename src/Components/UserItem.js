import styles from './UserItem.module.css'

function UserItem(props) {
  return (<li className={styles['userItem']}>
    <p className={styles['userItem__name']}>{props.name}</p>
    <p className={styles['userItem__age']}>{props.age} <span>Years</span></p>
  </li>)
}

export default UserItem;