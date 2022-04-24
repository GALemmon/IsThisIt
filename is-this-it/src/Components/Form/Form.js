import React, { useEffect, useState } from 'react'
import './Form.css'

const Form = ({ setSortCriteria, sortCriteria }) => {
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value)
  }

  return (
    <form className='sort-menu'>
      <div className='sort-dropdown'>
        <label htmlFor='sort'>Sort by: </label>
        <select
          name='sort'
          onChange={(e) => handleSortChange(e)}
          value={sortCriteria}
        >
          <option value='date'>Date (default)</option>
          <option value='dangerous'>Potentially dangerous objects</option>
          <option value='closest'>Nearest Miss</option>
        </select>
      </div>
    </form>
  )
}

export default Form
