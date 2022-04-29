import React, { useState, useEffect } from 'react'
import { UserContext } from '../../contexts'
import Chat from '../Chat'
import DialogList from '../DialogList'
import MessageArea from '../MessageArea'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const [user, setUser] = useState({
    id: 1,
    username: 'User',
    imageSrc: '/userAvatar.png'
  })

  //useReducer

  useEffect(() => {
    // send the server request
    // after that - put data in store (dispatch data to reducer)
  })

  return (
    <UserContext.Provider value={user}>
      <main className={styles.container}>
        <DialogList />
        <div className={styles['chat-wrapper']}>
          <Chat />
          <MessageArea />
        </div>
      </main>
    </UserContext.Provider>
  )
}

export default Dashboard
