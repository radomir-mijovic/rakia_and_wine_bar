import styled from "styled-components";

export const AboutStyled = styled.section`
  width: 100%;
  height: auto;
  background: #EEEBE1;
  display: flex;
  flex-direction: column;
  padding: 5.5rem clamp(3rem, 4vw, 8rem);

  .title {
    font-size: clamp(2rem, 3vw, 3rem);
    text-transform: uppercase;
    font-weight: 500;
    color: #9D7F63;
    margin-bottom: 2.4rem;
  }

  > h3 {
    font-size: clamp(1.8rem, 3vw, 2.2rem);
    color: #9D7F63;
    font-weight: 400;
    //font-family: 'Open Sans', cursive;
  }
`