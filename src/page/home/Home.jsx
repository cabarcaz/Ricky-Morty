import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import styled from "styled-components";
import { device } from "../../components/device/Device";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import Pagination from "../../components/pagination/Pagination";

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
      let infoApi = await fetch(api).then((res) => res.json());
      updateFetchedInfoApi(infoApi);
    })();
  }, [api]);

  const Title = styled.h1`
    text-align: center;
    font-family: var(--font);
    color: green;
    font-size: 5rem;
  `;
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    margin: 0 25px;
    @media ${device.tablet} {
      margin: auto 13px;
      padding: auto;
      justify-content: center;
    }
    @media ${device.mobileS} {
      justify-content: center;
    }
  `;

  return (
    <div>
      <Search updateSearch={updateSearch} updatePageNumber={updatePageNumber} />
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
  );
};

export default Home;
