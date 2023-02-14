import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import FilterEpisode from '../../components/filter/category/FilterEpisode'

const Episodes = () => {
  let [results, updateResults] = useState([])
  let [info, updateInfo] = useState([])
  let [id, updateId] = useState(1)
  let { air_date, name } = info

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      updateInfo(data)

      let x = await Promise.all(
        data.characters.map(async (a) => {
          const res = await fetch(a)
          return await res.json()
        })
      )
      updateResults(x)
    })()
  }, [api])

  return (
    <div>
      <p>Episode name : {" "} <span>{name === "" ? "Unknown" : name}</span></p>
      <p>Air Date : <span>{air_date === "" ? "Unknown" : air_date}</span></p>
      <div>
        <p>Select episode</p>
        <FilterEpisode name="Episode" changeId={updateId} total={51} />
      </div>
      <div>
        <Card results={results}/>
      </div>
    </div>
  )
}

export default Episodes
