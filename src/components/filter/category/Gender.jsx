import React from 'react'
import { NoButton } from '../../styled/StyledStatusButtons'
import ButtonFilter from '../ButtonFilter'

const Gender = ({ updateGender, updatePageNumber }) => {
  let gender = ["Male", "Female", "Genderless", "Unknown"]
  return (
    <div>
        <NoButton type="button">Gender</NoButton>
      <div>
        {gender.map((item, index) => (
          <ButtonFilter
            key={index}
            index={index}
            name="status"
            task={updateGender}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Gender
