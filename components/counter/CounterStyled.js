import styled from "styled-components";

export const CounterStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #EEEBE1;
  padding: 4rem 0;
  
  .header {
    font-size: clamp(3rem, 4vw, 5rem);
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    margin-bottom: 3.4rem;
  } 
  
  .counters {
    width: 100%;
    height: auto;
    display: grid;
    align-items: center;
    grid-gap: 1.5rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    padding: 0 clamp(.5rem, 4vw, 8rem);
  }
  
  .counter {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    ::after {
      content: "";
      bottom: 0;
      width: 70%;
      background: #9D7F63;
      height: .2rem;
    }
  }
  
  .number {
    font-size: clamp(3rem, 4vw, 4rem);
    margin-bottom: 1.4rem;
  }
  
  .title {
    font-size: clamp(2rem, 4vw, 2.6rem);
    font-weight: 700;
    color: #B28C67;
    text-transform: uppercase;
    font-family: 'Shadows Into Light', cursive;
  }
`