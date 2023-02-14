import styled from "styled-components";
import { device } from "../device/Device";
import { rick } from "./StyledComponents";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const H2 = styled.h2`
 margin:30px auto ;
 font-family: var(--font);
 color: ${rick};
 font-size: 2rem;
 cursor: pointer;
 @media ${device.laptop}{
  font-size: 3rem;
 }
`;

export const H3 = styled.h3`
margin:30px auto;
 font-family: var(--font);
 color: ${rick};
 font-size: 1.5rem;
 @media ${device.laptop}{
  font-size: 3rem;
 }
`;

export const DivFilter = styled(Div)`
 flex-direction: row;
 justify-content: space-evenly;
 border: 1px solid;
`