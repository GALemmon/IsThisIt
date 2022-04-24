import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
  return (
    <div>
      <header>
        <h1>TITLE!!!</h1>
      </header>
      <section className='welcome-message'>
        <h2>Hi there!</h2>
        <p>Heres some stuff about this thing!</p>
        <Link to='/main'>
          <button className='enter-button'>Click to proceed.</button>
        </Link>
      </section>
    </div>
  )
}

export default Welcome
