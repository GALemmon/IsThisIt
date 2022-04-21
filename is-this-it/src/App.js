import React, { useEffect, useState } from 'react'
import fetchNEOs from './APICalls';
import { Routes, Route } from 'react-router'
import NEOsArea from './Components/NEOsArea/NEOsArea';


const App = () => {

  const[NEOs, setNEOs] = useState(null)
  const[startDate, setStartDate] = useState('')
  const[endDate, setEndDate] = useState('')
  const[errorMessage, setErrorMessage] = useState('')

  
  useEffect(() => {determineDates()}, [])
  useEffect(() => {
    fetchUserNEOsByDate()
  }, [startDate, endDate])
  
  const determineDates = () => {
    const current = new Date()
    const today = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`
    const week = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate() + 6}`
    setStartDate(today) 
    setEndDate(week)
  }


  const fetchUserNEOsByDate = () => {
    fetchNEOs(startDate, endDate).then((res) => {
      if (!res.ok) {
        setErrorMessage('Oops, something went wrong.  Please try again later.')
      } else {
        return res.json()
      }
    })
    .then((NEOData) => {
      console.log(NEOData)
      console.log('NEOData: ', NEOData.near_earth_objects)
      setNEOs(NEOData.near_earth_objects)
    })
  }



  return (
    <div className='App'>
      <Routes>
        <header>
          <h1>TITLE!!!</h1>
        </header>
        <main>
          {NEOs && <NEOsArea NEOs={NEOs} errorMessage={errorMessage} />}
        </main>
      </Routes>
    </div>
  )
}

export default App;
