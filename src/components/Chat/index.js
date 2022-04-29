import React, { useContext, useRef, useEffect } from 'react'
import styles from './Chat.module.css'
import { UserContext } from '../../contexts'
import cx from 'classnames'

const Chat = props => {
  const messagesEndRef = useRef(null)
  const currentUser = useContext(UserContext)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [props.dialog])

  const messageArray = props.dialog.map(msg => {
    const { id, body, user } = msg

    const cn = cx(styles['message-wrapper'], {
      [styles['current-author-message']]: user.id === currentUser.id
    })
    return (
      <div className={cn} key={id}>
        <img
          src={user.imageSrc ? user.imageSrc : '/userAvatar.png'}
          className={styles['message-author-image']}
        />
        <div className={styles['text-wrapper']}>
          <span className={styles.username}> {user.username} </span>
          <span className={styles['message-body']}>{body} </span>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.container}>
      {messageArray}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default Chat
