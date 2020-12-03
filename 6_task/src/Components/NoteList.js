import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API = 'http://localhost:3001/notes'

export default function NoteList() {

    const [notes, setNotes] = useState([])

    useEffect(()=>{
        axios.get(API)
            .then(response => setNotes(response.data))
    },[])

    return (
        <div className='noteList'>
            <h2>Saved Notes</h2>
            {notes.map(note =>
                <div className='resultNote' key={note.id}>
                    <label>First name</label>
                    <p>{note.firstName}</p>
                    <label>Last name</label>
                    <p>{note.lastName}</p>
                    <label>Phone</label>                    
                    <p>{note.phone}</p>
                    <label>Message</label>                    
                    <p>{note.message}</p>
                    <label>Role</label>                    
                    <p>{note.role}</p>
                </div>
            )}
        </div>
    )
}
