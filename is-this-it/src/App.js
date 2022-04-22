import React, { useEffect, useState } from 'react'
import fetchNEOs from './APICalls'
import { Routes, Route } from 'react-router-dom'
import Welcome from './Components/Welcome/Welcome'
import Main from './Main/Main'

const App = () => {
  const [NEOs, setNEOs] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [sortCriteria, setSortCriteria] = useState('date')

  useEffect(() => {
    const current = new Date()
    const today = `${current.getFullYear()}-${
      current.getMonth() + 1
    }-${current.getDate()}`
    const week = `${current.getFullYear()}-${current.getMonth() + 1}-${
      current.getDate() + 6
    }`
    fetchNEOsByDate(today, week)
  }, [])

  const fetchNEOsByDate = (startDate, endDate) => {
    fetchNEOs(startDate, endDate)
      .then((res) => {
        if (!res.ok) {
          setErrorMessage(
            'Oops, something went wrong.  Please try again later.'
          )
        } else {
          return res.json()
        }
      })
      .then((NEOData) => {
        const flat = Object.values(NEOData.near_earth_objects).flat()
        setNEOs(flat)
      })
  }

  console.log('app render')

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route
          exact
          path='/main'
          element={
            <Main
              NEOs={NEOs}
              errorMessage={errorMessage}
              setSortCriteria={setSortCriteria}
              sortCriteria={sortCriteria}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
