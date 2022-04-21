import React from 'react'
import './Card.css'

const Card = ({ object }) => {
  // console.log(object.close_approach_data[0].miss_distance.miles)
  const missDistanceMiles = +object.close_approach_data[0].miss_distance.miles
  const missDistanceLunar = +object.close_approach_data[0].miss_distance.lunar
  const speed = +object.close_approach_data[0].relative_velocity.miles_per_hour
  
  return (
    <div className={`card ${object.is_potentially_hazardous_asteroid ? 'dangerous' : ''} `}>
      <h2>{object.name}</h2>
      <h3>
        This object's closest approach to Earth will occur on: <br />
        {object.close_approach_data[0].close_approach_date}.
      </h3>
      <h4>
        Is this a potentially hazardous object? <br /><br/>
        {object.is_potentially_hazardous_asteroid && 'Yes.'}
        {!object.is_potentially_hazardous_asteroid && 'No.'}
      </h4>
      <p>
        This object is between{' '}
        {object.estimated_diameter.feet.estimated_diameter_min.toFixed(2)} and{' '}
        {object.estimated_diameter.feet.estimated_diameter_max.toFixed(2)} feet
        in diameter. It is traveling at {speed.toFixed(2)} miles per hour. It
        should miss the Earth by {missDistanceMiles.toFixed(2)} miles, or{' '}
        {missDistanceLunar.toFixed(2)} times the distance to the moon.
      </p>
    </div>
  )
}

export default Card
