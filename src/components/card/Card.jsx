import React from "react";
import styled from "styled-components";

const Card = ({ results }) => {
  let morty = "#fafd7cff",
    rick = "#a6eee6ff",
    jerry = "#917c5dff";

  const CARD = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    border: 2px solid #69c8ecff;
    border-radius: 15px;
    margin-top: 15px;
  `;
  const NAME = styled.h2`
    text-align: center;
    font-family: var(--font);
    color: ${rick};
    margin-top: 10px;
  `;
  const Status = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 15px 15px;
    padding: 5px;
    text-align: center;
    color: ${rick};
    font-family: var(--font);
    font-size: 25px;
    margin: 3px 15px;
  `;
  const P = styled.p`
    color: ${jerry};
    font-weight: bold;
    font-size: 1rem;
    margin: 3px 15px;
  `;
  const Span = styled.span`
    font-weight: normal;
    color: ${morty};
  `;
  const Img = styled.img`
    padding: 10px;
    flex: 1 1 100%;
  `;
  const NotFound = styled.div`
    margin-top: 40px;
    font-family: var(--font);
    font-size: 80px;
    color: ${rick};
  `;

  let display;

  if (results) {
    display = results.map((props) => {
      return (
        <div key={props.id}>
          <CARD>
            <NAME>{props.name}</NAME>
            <Img src={props.image} alt="" />
            <div>
              {(() => {
                if (props.status === "Dead") {
                  return <Status color="#ff0000">{props.status}</Status>;
                } else if (props.status === "Alive") {
                  return <Status color="#009923">{props.status}</Status>;
                } else return <Status color="#8c8c8c">{props.status}</Status>;
              })()}
            </div>
            <P>
              Gender : <Span>{props.gender}</Span>
            </P>
            <P>
              Species : <Span>{props.species}</Span>
            </P>
            <P>
              Origin place : <Span>{props.origin.name}</Span>
            </P>
            <P>
              Last location : <Span>{props.location.name}</Span>
            </P>
          </CARD>
        </div>
      );
    });
  } else {
    display = <NotFound> No character found</NotFound>;
  }

  return <> {display} </>;
};

export default Card;
