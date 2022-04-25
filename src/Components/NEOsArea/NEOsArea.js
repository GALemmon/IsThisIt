import React, { useEffect, useState } from 'react'
import './NEOsArea.css'
import Card from '../Card/Card.js'
import { sortByDate, sortByDangerous, sortByClosest } from '../../utils'

const NEOsArea = ({ NEOs, errorMessage, sortCriteria }) => {
  const [objects, setObjects] = useState(NEOs)
  const [sortedObjects, setSortedObjects] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    sortObjects(objects, sortCriteria)
  }, [])

  useEffect(() => {
    sortObjects(objects, sortCriteria)
  }, [sortCriteria])

  useEffect(() => {
    makeCards(sortedObjects)
  }, [sortCriteria, sortedObjects])

  const makeCards = (sortedObjects) => {
    let newCards = sortedObjects.map((object) => {
      return <Card key={object.id} object={object} />
    })
    setCards(newCards)
  }

  const sortObjects = (objects, sortCriteria) => {
    if (sortCriteria === 'date') {
      let newSort = sortByDate(objects)
      setSortedObjects(newSort)
    } else if (sortCriteria === 'dangerous') {
      let newSort = sortByDangerous(objects)
      setSortedObjects(newSort)
    } else if (sortCriteria === 'closest') {
      let newSort = sortByClosest(objects)
      setSortedObjects(newSort)
    }
  }

  return (
    <>
      {errorMessage && <section>errorMessage</section>}
      {!errorMessage && <div className='object-area'>{cards}</div>}
    </>
  )
}

export default NEOsArea
