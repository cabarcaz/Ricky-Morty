import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import FilterEpisode from "../../components/filter/category/FilterEpisode";
import { Section, P, Text, Span } from "../../components/styled/StyledEpisodes";

const Location = () => {
  let [results, updateResults] = useState([]);
  let [info, updateInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, updateNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function() {
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
    <Text>
      <P>
        Location : <Span>{name === "" ? "Unknown" : name}</Span>{" "}
      </P>
      <P>
        Dimension: <Span>{dimension === "" ? "Unknown" : dimension}</Span>{" "}
      </P>
      <P>
        Type: <Span>{type === "" ? "Unknown" : type}</Span>
      </P>
      <div>
        <P>Pick Location</P>
        <FilterEpisode name="Location" changeId={updateNumber} total={126} />
      </div>
      <Section>
        <Card page="/location/" results={results} />
      </Section>
    </Text>
  );
};

export default Location;
