import React from 'react'
import TimeLineList from './TimeLineList'

export default function Home() {

    const list=['Save','Find','Compare']

    return (
        <div className='landingPage'>
            <h1>Home</h1>
            <TimeLineList list={list}/>
        </div>
    )
}
