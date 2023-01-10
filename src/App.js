import React, { useEffect, useState } from 'react'
import fetchNEOs from './APICalls'
import { Routes, Route } from 'react-router-dom'
import Welcome from './Components/Welcome/Welcome'
import Main from './Components/Main/Main'
import NotFound from './Components/NotFound/NotFound'
import './mediaQueries.css'

const App = () => {
  const [NEOs, setNEOs] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [sortCriteria, setSortCriteria] = useState('date')

  useEffect(() => {
    const current = new Date()
    const todayDate = new Date()
    const weekDate = current.getDate() + 6
    current.setDate(weekDate)
    const weekDate1 = current.toLocaleString()
    const today = `${todayDate.getFullYear()}-0${
      todayDate.getMonth() + 1
    }-0${todayDate.getDate()}`
    const week = `${weekDate1.slice(5, 9)}-0${weekDate1.slice(0, 1)}-${
      weekDate1.slice(2, 4)
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
