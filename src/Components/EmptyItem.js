import styles from './EmptyItem.module.css'

function EmptyItem() {
  return <li className={styles['empty_item']}>
    Log Some Users.
  </li>
}

export default EmptyItem;