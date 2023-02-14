import React from 'react'

const FilterEpisode = ({ name, changeId, total }) => {
  return (
    <div>
      <select
        onChange={(e) => changeId(e.target.value)}
        id={name}>
        <option value="1">Choose episode</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option
              key={name}
              value={x + 1}>
              {name} - {x + 1}
            </option>
          )
        }
        )}
      </select>
    </div>
  )
}

export default FilterEpisode
