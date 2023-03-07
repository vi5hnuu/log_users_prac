import styles from './AlertModal.module.css'

function AlertModal(props) {
  return <div className={styles['alert-modal']}>
    <p className={styles['alert-message']}>Please enter a valid name/age.</p>
    <div className={styles['modal-actions']}>
      <button onClick={props.onAlertHandler} className={`${styles['btn']} ${styles['btn-ok']}`}>Ok</button>
    </div>
  </div>
}

export default AlertModal;