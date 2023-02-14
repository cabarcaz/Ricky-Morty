import styled from "styled-components";
import { device } from "../device/Device";
import { morty } from "./StyledComponents";
import { PagesLink } from "./StyledNavbar";
import { Input } from "./StyledSearch";

export const NoButton = styled(PagesLink)`
  color: black;
  background-color: ${morty};
`
export const InputRatio = styled(Input)`
  width: auto;
  padding: 5px;
  margin: 5px;
  
  @media ${device.tablet}{
    font-size: 2rem;
  }
`