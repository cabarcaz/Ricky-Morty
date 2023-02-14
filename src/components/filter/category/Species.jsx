import React from 'react'
import { NoButton } from '../../styled/StyledStatusButtons'
import ButtonFilter from '../ButtonFilter'

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = ["Human", "Alien", "Humanoid",
    "Poopybutthole", "Mythological", "Unknown",
    "Animal", "Disease", "Robot", "Cronenberg", "Planet",]
  return (
    <div>
        <NoButton type="button">Species</NoButton>
      <div>
        {species.map((item, index) => (
          <ButtonFilter
            key={index}
            index={index}
            name="species"
            task={updateSpecies}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Species
