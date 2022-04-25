import React from "react";
import './NotFound.css'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="message-404">404 - That page does not exist.</h1>
      <Link to='/'>
        <button className='home-button'>Click to return to the site.</button>
      </Link>
    </div>
  )
}

export default NotFound