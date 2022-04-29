import React, { useState } from 'react'
import styles from './MessageArea.module.css'
import cx from 'classnames'

const MessageArea = props => {
  const [inputMessage, setInputMessage] = useState('')

  const handleChange = ({ target: { value } }) => {
    setInputMessage(value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.submitMessage(inputMessage)
    setInputMessage('')
  }

  // Add 'enter' posibility
  // validate user message

  return (
    <div className={styles.container}>
      <form className={styles['form-wrapper']} onSubmit={handleSubmit}>
        <textarea
          className={styles.input}
          value={inputMessage}
          onChange={handleChange}
        />
        <button type='submit' className={styles['submit-button']}>
          Send
        </button>
      </form>
    </div>
  )
}

export default MessageArea
