import React from 'react'
import { InputRatio } from '../styled/StyledStatusButtons';

const ButtonFilter = (props) => {
  return (
    <div>
      <InputRatio
        className='x'
        type="radio"
        name={props.name}
        id={`${props.name}-${props.index}`}
      />
        <label onClick={(x) => { props.task(props.input); props.updatePageNumber(1); }}
          className="" for={`${props.name}-${props.index}`}> {props.input}
        </label>
    </div>
  )
}

export default ButtonFilter
