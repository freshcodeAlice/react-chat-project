import React from 'react'
import styles from './Chat.module.css'

const Chat = props => {
  const messageArray = props.dialog.map(msg => {
    const { id, body, user } = msg

    return (
      <div className={styles['message-wrapper']}>
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

  return <div className={styles.container}>{messageArray}</div>
}

export default Chat
