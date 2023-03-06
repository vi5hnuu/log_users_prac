import styles from './Empty_Item.module.css'

function Empty_Item() {
  return <li className={styles['empty_item']}>
    Log Some Users.
  </li>
}

export default Empty_Item;