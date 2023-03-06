import styles from './UserDetailForm.module.css'

function UserDetailForm() {
  return <div className={styles['user-details_container']}>
    <form className={styles['user-details-form']}>
      <div className={styles['user-details-control']}>
        <label htmlFor='name'>Username : </label>
        <input type='text' id='name' maxLength='50' />
      </div>
      <div className={styles['user-details-control']}>
        <label htmlFor='age'>Age(Years) : </label>
        <input type='number' id='age' min='20' max='100' />
      </div>
      <div className={styles['user-details-action']}>
        <button type='submit' className={styles['btnAddUser']}>Log User</button>
      </div>
    </form>
  </div>
}

export default UserDetailForm;