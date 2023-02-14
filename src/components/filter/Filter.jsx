import React from "react";
import { Div, DivFilter, H2, H3 } from "../styled/StyleFilter";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = (props) => {
  let clear = () => {
    props.updateStatus("");
    props.updateGender("");
    props.updateSpecies("");
    props.updatePageNumber(1);
    window.location.reload(false);
  };

  return (
    <Div>
      <div style={{ display: "inline-flex" }}>
        <H2>Filter</H2>
        <H3 onClick={clear} style={{ cursor: "pointer" }}>
          Clear Filter
        </H3>
      </div>
      <DivFilter>
        <Status
          updatePageNumber={props.updatePageNumber}
          updateStatus={props.updateStatus}
        />
        <Species
          updatePageNumber={props.updatePageNumber}
          updateSpecies={props.updateSpecies}
        />
        <Gender
          updatePageNumber={props.updatePageNumber}
          updateGender={props.updateGender}
        />
      </DivFilter>
    </Div>
  );
};

export default Filter;
