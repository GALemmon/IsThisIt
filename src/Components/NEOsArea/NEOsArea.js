import React from 'react'
import './NEOsArea.css'
import Card from '../Card/Card.js'

const NEOsArea = ({ NEOs }) => {
  console.log('NEOs: ', Object.values(NEOs))
  let objects = Object.values(NEOs).flat()
  console.log('objects: ', objects)
  let cards = []
  if (NEOs !== null) {
    cards = objects.map(object => {
      return (
        <Card key={object.id} object={object} />
      )
    })
  }

  return (
    <div className='object-area'>
      {cards}
    </div>
  )
}

export default NEOsArea
