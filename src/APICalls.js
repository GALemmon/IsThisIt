import APIKey from "./APIKey"

const fetchNEOs = (startDate, endDate) => {
  return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${APIKey}`)

}

export default fetchNEOs