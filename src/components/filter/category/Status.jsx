import React from 'react'
import { NoButton } from '../../styled/StyledStatusButtons'
import ButtonFilter from '../ButtonFilter'

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"]

  return (
    <div>
      <NoButton type="button">Status</NoButton>
      <div>
        {status.map((item, index, id) => (
          <ButtonFilter
            key={id}
            index={index}
            name="status"
            task={updateStatus}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Status
