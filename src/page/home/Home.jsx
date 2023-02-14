import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import styled from 'styled-components'
import Search from '../../components/search/Search'
import Filter from '../../components/filter/Filter'
import Pagination from '../../components/pagination/Pagination'



const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedInfoApi, updateFetchedInfoApi] = useState([]);
  let [search, updateSearch] = useState("");
  let { info, results } = fetchedInfoApi;
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;


  useEffect(() => {
    (async function () {
      let infoApi = await fetch(api).then((res) => res.json())
      updateFetchedInfoApi(infoApi)
    })()
  }, [api])

  const Title = styled.h1`
    text-align: center;
    font-family: var(--font);
    color: green;
    font-size: 50px;
  `
  const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  `

  return (
    <div>
      <Search updateSearch={updateSearch} updatePageNumber={updatePageNumber}/>
      <Filter
        pageNumber={pageNumber}
        status={status}
        updateStatus={updateStatus}
        updateGender={updateGender}
        updateSpecies={updateSpecies}
        updatePageNumber={updatePageNumber}
      />
      <Title>Characters</Title>
      <Container>
        <Card results={results} />
      </Container>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  )
}

export default Home