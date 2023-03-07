import { useState } from 'react';
import AlertModal from './AlertModal';
import styles from './UserDetailForm.module.css'
import ReactDOM from 'react-dom';
function UserDetailForm(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [shouldShowAlert, setShouldShowAlert] = useState(false)
  const [validations, setValidations] = useState({ nameIsValid: true, ageIsValid: true })

  function onNameChange(evnt) {
    const uname = evnt.target.value
    setValidations(oldValidations => {
      return { ...oldValidations, nameIsValid: uname.length !== 0 }
    })
    setName(uname)
  }

  function onAgeChange(evnt) {
    const uage = evnt.target.value
    setValidations(oldValidations => {
      return { ...oldValidations, ageIsValid: (+uage >= 18 && +uage <= 65) }
    })
    setAge(uage)
  }

  function onAlertHandler() {
    setShouldShowAlert(false)
  }
  function onAddUserHandler(evnt) {
    evnt.preventDefault()
    const uname = name
    const uage = age;
    if (uname.length === 0 || !(+uage >= 18 && +uage <= 65)) {
      setShouldShowAlert(true)
      return;
    }
    setValidations({ nameIsValid: true, ageIsValid: true })
    setName('')
    setAge('')
    props.onAddUser({ id: Math.random().toString(), name, age })
  }

  return <div className={styles['user-details_container']}>
    {shouldShowAlert &&
      ReactDOM.createPortal(<AlertModal message='Please enter a valid name/age.' onAlertHandler={onAlertHandler} />, document.querySelector('body'))}
    <form className={styles['user-details-form']}>
      <div className={styles['user-details-control']}>
        <label htmlFor='name'>Username : </label>
        <input
          onChange={onNameChange}
          className={`${validations.nameIsValid ? "" : styles.invalid}`}
          value={name}
          type='text'
          id='name'
          maxLength='50'
          placeholder='Vishnu kumar' />
      </div>
      <div className={styles['user-details-control']}>
        <label htmlFor='age'>Age(Years) : </label>
        <input
          onChange={onAgeChange}
          className={`${validations.ageIsValid ? "" : styles.invalid}`}
          value={age}
          type='number'
          id='age'
          placeholder='21' />
      </div>
      <div className={styles['user-details-action']}>
        <button onClick={onAddUserHandler} type='submit' className={styles['btnAddUser']}>Log User</button>
      </div>
    </form>
  </div>
}

export default UserDetailForm;