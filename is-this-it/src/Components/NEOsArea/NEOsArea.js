import React, { useEffect, useState } from 'react'
import './NEOsArea.css'
import Card from '../Card/Card.js'
import {
  sortByDate,
  sortByDangerous,
  sortBySizeBiggest,
  sortBySizeSmallest,
  sortByClosest
} from '../../utils'

const NEOsArea = ({ NEOs, errorMessage, sortCriteria }) => {
  const [objects, setObjects] = useState(NEOs)
  const [sortedObjects, setSortedObjects] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    sortObjects(objects, sortCriteria)
    logShit('sort shit:')
  }, [])

  useEffect(() => {
    sortObjects(objects, sortCriteria)
    logShit('re-sort')
  }, [sortCriteria])

  useEffect(() => {
    makeCards(sortedObjects)
    logShit('makin cards')
  }, [sortCriteria, sortedObjects])

  const logShit = (num) => {
    console.log(`logShit ${num}`)
    console.log('sortCriteria: ', sortCriteria)
    console.log('objects: ', objects[0])
    console.log('sortedObjects: ', sortedObjects[0])
    console.log('cards: ', cards[0])
  }

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
    } else if (sortCriteria === 'size-b-to-l') {
      let newSort = sortBySizeBiggest(objects)
      setSortedObjects(newSort)
    } else if (sortCriteria === 'size-l-to-b') {
      let newSort = sortBySizeSmallest(objects)
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
