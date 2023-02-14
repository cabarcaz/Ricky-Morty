import React from 'react'
import { Form, Input, Button } from '../styled/StyledSearch';

const Search = ({ updateSearch, updatePageNumber }) => {

  let searchBtn = (e) => {
    e.preventDefault();
  }

  return (
    <Form>
      <Input
        type="text"
        onChange={(e) => {
          updatePageNumber(1)
          updateSearch(e.target.value)
          }}
        placeholder="Search for a character"
        />
        <Button onClick={searchBtn}>Search</Button>
    </Form>
  )
}

export default Search