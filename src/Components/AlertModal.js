import { Fragment } from 'react';
import styles from './AlertModal.module.css'
import BackDrop from './BackDrop';

function AlertModal(props) {
  return <Fragment>
    <BackDrop />
    <div className={styles['alert-modal']}>
      <p className={styles['alert-message']}>{props.message}</p>
      <div className={styles['modal-actions']}>
        <button onClick={props.onAlertHandler} className={`${styles['btn']} ${styles['btn-ok']}`}>Ok</button>
      </div>
    </div>
  </Fragment>
}

export default AlertModal;