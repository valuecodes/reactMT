import React, { Component, useState, useEffect } from 'react';
import Form from './Components/Form'
import View from './Components/View'
import Popup from './Components/Popup'
import NoteList from './Components/NoteList'
import './App.css';
import axios from 'axios';

export default function App() {

  const [note, setNote] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    role:'',
    message:'',
  })

  const [showPopup, setShowPopup] = useState(false)

  const handleFormInput = (e) => {
    const value = e.target.value
    const name = e.target.name
    setNote({
      ...note,
      [name]:value
    })
  }

  const handleShowPopup = (e) => {
    setShowPopup(true)
    e.preventDefault()
  }

  const submitHandler = (e) => {
    axios.post('http://localhost:3001/notes',note)
    window.location.reload()
    setShowPopup(false)
  }

  return (
    <div>
      <div className='top container'>
        <Form 
          handleFormInput={handleFormInput} 
          handleShowPopup={handleShowPopup}
        />
        <NoteList/>        
      </div>
      <View form={note}/>
      {showPopup && 
        <Popup
            form={note}
            submit={submitHandler}
          />
      }
    </div>
  )
}
