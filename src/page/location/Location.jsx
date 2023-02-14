import React, {useState, useEffect} from 'react'
import Card from '../../components/card/Card';
import FilterEpisode from '../../components/filter/category/FilterEpisode';

const Location = () => {
  let [results, updateResults] = useState([]);
  let [info, updateInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, updateNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateInfo(data);
      let a = await Promise.all(
        data.residents.map(async (x) => {
          const res = await fetch(x);
          return await res.json();
        })
      );
      updateResults(a);
    })();
  }, [api]);

  return (
    <div>
      <p>Location : <span>{name === "" ? "Unknown" : name}</span> </p>
      <p>Dimension: <span>{dimension === "" ? "Unknown" : dimension}</span> </p>
      <p>Type: <span>{type === "" ? "Unknown" : type}</span></p>
      <div>
        <p>Pick Location</p>
        <FilterEpisode name="Location" changeId={updateNumber} total={126} />
      </div>
      <div>
        <div>
          <Card page="/location/" results={results} />
        </div>
      </div>
    </div>
  );
}

export default Location
