import React from 'react'
import './NEOsArea.css'
import Card from '../Card/Card.js'

const NEOsArea = ({ NEOs }) => {
  let objects = Object.values(NEOs).flat()
  let sortedObjects = objects.sort(function (a, b) {
    return (
      a.close_approach_data[0].epoch_date_close_approach -
      b.close_approach_data[0].epoch_date_close_approach
    )
  })
  let cards = []
  if (NEOs !== null) {
    cards = sortedObjects.map((object) => {
      return <Card key={object.id} object={object} />
    })
  }

  return <div className='object-area'>{cards}</div>
}

export default NEOsArea
