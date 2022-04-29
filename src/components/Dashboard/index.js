import React from 'react'
import Chat from '../Chat'
import DialogList from '../DialogList'
import MessageArea from '../MessageArea'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <main className={styles.container}>
      <DialogList />
      <div className={styles['chat-wrapper']}>
        <Chat />
        <MessageArea />
      </div>
    </main>
  )
}

export default Dashboard
