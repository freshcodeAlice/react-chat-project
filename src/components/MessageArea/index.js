import React from 'react'
import styles from './MessageArea.module.css'

const MessageArea = () => {
  return (
    <div className={styles.container}>
      <form className={styles['form-wrapper']}>
        <textarea className={styles.input} />
        <button type='submit' className={styles['submit-button']}>
          Send
        </button>
      </form>
    </div>
  )
}

export default MessageArea
