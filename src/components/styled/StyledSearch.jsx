import styled from "styled-components";
import { device } from "../device/Device";
import { PagesLink } from "./StyledNavbar";

export const Form = styled.form`
  display: flex;
  justify-content: center;

`

export const Input = styled.input`
  width: 50%;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  @media ${device.tablet}{
    font-size: 2rem;
  }
`

export const Button = styled(PagesLink)`
background-color: cyan;
@media ${device.tablet}{
  width: 15%;
}
`