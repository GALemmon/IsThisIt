export const sortByDate = (objects) => {
  let sortedObjectsDate = objects.sort((a, b) => {
    return (
      a.close_approach_data[0].epoch_date_close_approach -
      b.close_approach_data[0].epoch_date_close_approach
    )
  })
  return sortedObjectsDate
}

export const sortByDangerous = (objects) => {
  let sortedObjectsDanger = objects.sort(
    (a, b) =>
      Number(b.is_potentially_hazardous_asteroid) -
      Number(a.is_potentially_hazardous_asteroid)
  )
  return sortedObjectsDanger
}

export const sortBySizeBiggest = (objects) => {
  let objWithSize = objects.map((object) => {
    return (object.size =
      (+object.estimated_diameter.feet.etimated_diameter_min +
        +object.estimated_diameter.feet.etimated_diameter_max) /
      2)
  })
  let sortedObjectsBig = objWithSize.sort((a, b) => {
    return a.size - b.size
  })
  return sortedObjectsBig
}

export const sortBySizeSmallest = (objects) => {
  let objWithSize = objects.map((object) => {
    return (object.size =
      (+object.estimated_diameter.feet.etimated_diameter_min +
        +object.estimated_diameter.feet.etimated_diameter_max) /
      2)
  })
  let sortedObjectsSmall = objWithSize.sort((a, b) => {
    return b.size - a.size
  })
  return sortedObjectsSmall
}

export const sortByClosest = (objects) => {
  let sortedObjectsClose = objects.sort((a, b) => {
    return (
      +a.close_approach_data.miss_distance.miles -
      +b.close_approach_data.miss_distance.miles
    )
  })
  return sortedObjectsClose
}
