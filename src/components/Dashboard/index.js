import React, { useState, useEffect, useReducer } from 'react'
import { UserContext } from '../../contexts'
import Chat from '../Chat'
import DialogList from '../DialogList'
import MessageArea from '../MessageArea'
import styles from './Dashboard.module.css'
import { getData } from '../../api'
import { reducer } from '../../reducers'

const Dashboard = () => {
  const [user, setUser] = useState({
    id: 1,
    username: 'User',
    imageSrc: '/userAvatar.png'
  })
  const [state, dispatch] = useReducer(reducer, {
    messages: []
  })

  //useReducer

  useEffect(() => {
    getData().then(data =>
      dispatch({
        type: 'DATA_LOAD_SUCCESS',
        data
      })
    )
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
