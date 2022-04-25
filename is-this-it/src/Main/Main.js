import React, { useEffect } from 'react'
import './Main.css'
import Form from '../Components/Form/Form'
import NEOsArea from '../Components/NEOsArea/NEOsArea'

const Main = ({ NEOs, errorMessage, setSortCriteria, sortCriteria }) => {
  return (
    <>
      <header className='main-header'>
        <h1>Is This It</h1>
        <Form setSortCriteria={setSortCriteria} sortCriteria={sortCriteria} />
      </header>
      <main>
        {errorMessage && <div className='error'>{errorMessage}</ div>}
        {!errorMessage && !NEOs && (
          <div className='loading-mesage'>
            <h1>Loading! Please stand by!</h1>
          </div>
        )}
        {!!NEOs && (
          <NEOsArea
            NEOs={NEOs}
            errorMessage={errorMessage}
            sortCriteria={sortCriteria}
          />
        )}
      </main>
    </>
  )
}

export default Main
