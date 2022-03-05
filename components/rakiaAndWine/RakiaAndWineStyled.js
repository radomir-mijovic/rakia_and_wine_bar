import styled from "styled-components";

export const RakiaAndWineStyled = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 20vw);
  grid-gap: 2rem;
  padding: clamp(2rem, 5vw, 12rem);
  background: #EEEBE1;

  > div {
    position: relative;
  }

  .card {
    background: aqua;
  }

  .card-1 {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  .card-2,
  .card-5 {
    grid-row: span 2;
  }

  .card-7,
  .card-8 {
    grid-column: span 2;
  }

  .card-1 {
    position: relative;

    ::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, .4);
    }

    > div {
      top: 5vw;
      position: absolute;
      font-size: clamp(2.5rem, 4vw, 4rem);
      color: #FFFF;
      z-index: 2;
      font-family: 'Open Sans', cursive;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      text-align: center;
    }
  }

  .card-4, .card-9 {
    background: #B28C67;
    font-size: clamp(3rem, 4vw, 5rem);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      text-transform: uppercase;
      font-family: 'Open Sans', cursive;
      color: #FFFF;
      z-index: 2;
    }
  }

  .card-5 {
    background: #FFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(1rem, 2vw, 2rem);

    > header {
      font-size: clamp(3rem, 4vw, 4rem);
      font-weight: 800;
      color: #30271C;
      margin-bottom: 1rem;
    }

    > p {
      color: #CCB5AC;
      font-size: clamp(1.6rem, 2vw, 2.2rem);
    }
  }

  .card-9 {
    //display: flex;
    //align-items: center;
     font-size: clamp(1.6rem, 2vw, 4rem);
  }


  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;

    .card {
      height: 60vw;
    }
  }
`