import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {PagesLink, Title, Nav} from '../styled/StyledNavbar'

const Navbar = () => {
  return (
    <Nav>
      <Title>
        <Link to="/">Rick And Morty</Link>
      </Title>
      <div>
      <PagesLink>
        <NavLink to="/">Characters</NavLink>
      </PagesLink>
      <PagesLink>
         <NavLink to="/episodes">Episodes</NavLink>
      </PagesLink>
      <PagesLink>
        <NavLink to="/location">Location</NavLink>
      </PagesLink>
      </div>
    </Nav>
  )
}

export default Navbar
