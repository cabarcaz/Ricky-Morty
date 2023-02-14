import styled from "styled-components"
import { device } from "../device/Device"
import { rick } from "./StyledComponents"

export const Nav = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media ${device.tablet}{
  flex-direction: row;
}
@media ${device.laptop}{
  margin: auto;
  justify-content: space-around;
}
`

export const Title = styled.h1`
  margin: 20px;
  font-family: var(--font);
  font-weight: bold;
  font-size: 3rem;
  a:link,a:visited { text-decoration:none }
  a { color: ${rick}; }
  @media ${device.tablet}{
    font-size: 3rem;}
  @media ${device.laptop}{
    font-size: 5rem;
  }
`

export const PagesLink = styled.button`
  border-radius: 10px;
  padding: 10px 10px;
  margin: 12px;
  background-color: limegreen ;
  font-weight: bold;
  color: black;
  a:visited,a:link { text-decoration:none; }
  a{color:black};
  @media ${device.tablet}{
    font-size: 1.2rem;
  }
  @media ${device.laptop}{
    font-size: 2rem;
    font-weight: normal;
  }
`