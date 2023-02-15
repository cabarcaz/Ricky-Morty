import styled from "styled-components";
import { jerry, morty, rick } from "./StyledComponents";
import { Div } from "./StyleFilter";

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 0 25px;
`;

export const Text = styled(Div)`
  text-align: center;
  font-size: 1.5rem;
`;

export const P = styled.p`
  color: ${morty};
  font-family: var(--font);
  margin: 3px;
  display: flex;
  justify-content: center;
`;

export const Span = styled.span`
  color: ${jerry};
  font-family: normal;
`;

export const Box = styled.div`
  margin: 20px auto 40px auto;
  border: 1px solid #d9d9d9;
  height: 30px;
  overflow: hidden;
  width: 230px;
  position: relative;
Box::after {
  content: "\025be";
  display: table-cell;
  padding-top: 7px;
  text-align: center;
  width: 30px;
  height:30px; 
  background-color: #d9d9d9;
  position: absolute;
  top: 0;
  right: 0px;
  pointer-events:nome;
}
`;

export const Select = styled.select`
  background: transparent;
  border: 1px solid ${rick};
  font-size: 1rem;
  height: 30px;
  padding: 5px;
  width: 250px;
  select:focus {
    outline: none;
  }
`;
