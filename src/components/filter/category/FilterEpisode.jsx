import React from "react";
import { Box, Select } from "../../styled/StyledEpisodes";

const FilterEpisode = ({ name, changeId, total }) => {
  return (
    <Box>
      <Select onChange={(e) => changeId(e.target.value)} id={name}>
        <option value="1">Choose episode</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option key={name} value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};

export default FilterEpisode;
