import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import FilterEpisode from "../../components/filter/category/FilterEpisode";
import { Section, Text, P, Span } from "../../components/styled/StyledEpisodes";

const Episodes = () => {
  let [results, updateResults] = useState([]);
  let [info, updateInfo] = useState([]);
  let [id, updateId] = useState(1);
  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      updateInfo(data);

      let x = await Promise.all(
        data.characters.map(async (a) => {
          const res = await fetch(a);
          return await res.json();
        })
      );
      updateResults(x);
    })();
  }, [api]);

  return (
    <div>
      <Text>
        <P>
          Episode name : <Span>{name === "" ? "Unknown" : name}</Span>
        </P>
        <P>
          Air Date : <Span>{air_date === "" ? "Unknown" : air_date}</Span>
        </P>
        <div>
          <P>Select episode</P>
          <FilterEpisode name="Episode" changeId={updateId} total={51} />
        </div>
      </Text>
      <Section>
        <Card results={results} />
      </Section>
    </div>
  );
};

export default Episodes;
