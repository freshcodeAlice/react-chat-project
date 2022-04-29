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
    imageSrc: '/userphoto.jpg'
  })
  const [state, dispatch] = useReducer(reducer, {
    messages: []
  })

  useEffect(() => {
    getData().then(data =>
      dispatch({
        type: 'DATA_LOAD_SUCCESS',
        data
      })
    )
  }, [])

  const addNewMessage = text => {
    const newMessage = {
      body: text,
      user
    }
    dispatch({
      type: 'ADD_NEW_MESSAGE',
      data: newMessage
    })
  }

  return (
    <UserContext.Provider value={user}>
      <main className={styles.container}>
        <DialogList />
        <div className={styles['chat-wrapper']}>
          <Chat dialog={state.messages} />
          <MessageArea submitMessage={addNewMessage} />
        </div>
      </main>
    </UserContext.Provider>
  )
}

export default Dashboard
