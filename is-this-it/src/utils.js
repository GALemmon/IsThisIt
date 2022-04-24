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

export const sortByClosest = (objects) => {
  let sortedObjectsClose = objects.sort((a, b) => {
    return (
      +a.close_approach_data[0].miss_distance.miles -
      +b.close_approach_data[0].miss_distance.miles
    )
  })
  return sortedObjectsClose
}
