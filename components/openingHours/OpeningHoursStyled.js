import styled from "styled-components";

export const OpeningHoursStyled = styled.section`
  background: #151412;
  height: auto;
  padding: 2rem clamp(3rem, 4vw, 8rem);
  //overflow: hidden;
  
  .title {
    font-size: clamp(2rem, 3vw, 3rem);
    text-transform: uppercase;
    font-weight: 500;
    color: #FFFF;
    margin-bottom: 2.4rem;
  }
  
  .days {
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 1rem 3rem;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
  
  .day {
    display: flex;
    //align-items: center;
    justify-content: space-between;
    
    > h3,
    p {
      font-size: clamp(1.5rem, 3vw, 1.8rem);
      color: #FFFF;
      margin-bottom: 0;
      text-transform: uppercase;
    }
    
    > p {
      color: #ACACAC;
    }
    
    > h3 > span {
      color: #9D7F63;
    }
    
    > h4 {
      font-size: clamp(1.5rem, 3vw, 1.8rem);
      text-transform: uppercase;
      color: #9D7F63;
    }
  }
  
  
  .line {
    border-bottom: 1px solid #ACACAC;
    width: 40%;
  }
  
  .happy {
    width: 30%;
    border-bottom: 1px solid #9D7F63;
  }
`