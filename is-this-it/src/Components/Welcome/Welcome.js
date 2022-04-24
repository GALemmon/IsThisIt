import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='welcome-page'>
      <header>
        <h1>Is This It?</h1>
      </header>
      <section className='welcome-message'>
        <h2>Welcome to "Is This It"!</h2>
        <p>
          This site is a project intended to demonstrate technical compentency.
          While it does utilize a NASA database to populate a list of Near Earth
          Objecst (NEOs), there is no attempt at any sort of scientific
          analysis, rigorous or otherwise. Please do not place any stock in the
          data presented as anything other than a source of mild amusement.
          <br />
          <br />
          Thank you.
        </p>
        <Link to='/main'>
          <button className='enter-button'>Click to proceed.</button>
        </Link>
      </section>
    </div>
  )
}

export default Welcome
