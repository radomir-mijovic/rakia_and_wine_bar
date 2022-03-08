import styled from "styled-components";


export const LetsHaveDrinkStyled = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  .title {
    font-size: clamp(3rem, 4vw, 5rem);
    text-transform: uppercase;
    font-weight: 500;
    margin: 8rem 0 1.5rem;
  }
  
  .subtitle {
    margin-bottom: 8rem;
  }
  
  .tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: clamp(15rem, 80vw, 100rem);
    margin-bottom: 5rem;
  }
  
  .tab {
    width: 100%;
    height: 10rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .active {
    ::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      width: 50%;
      height: .5rem;
      background: #B28C67;
    }
  }
  
  .icon {
    position: relative;
    width: 5rem;
    height: 6rem;
    margin-top: -3rem;
  }
  
  .text {
    font-size: clamp(3rem, 5vw, 4rem);
    font-weight: 400;
    letter-spacing: .3rem;
    color: #B28C67;
  }
  
  .menu {
    width: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding: 0 clamp(.5rem, 5vw, 30rem);
    margin-bottom: 5rem;
  }
  
  .item {
    display: flex;
  }
  
  .image {
    position: relative;
    height: 100%;
    width: 10rem;
    display: flex;
    align-items: center;
  }
  
  .info {
    width: 100%;
    padding: 1rem 3rem;
  }
  
  .info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > header,
    .price {
      font-size: 2rem;
      text-transform: uppercase;
      color: black;
      margin-bottom: 0;
    }
  }
  
  .description {
    color: black;
    font-size: clamp(1.6rem, 2vw, 1.8rem);
    margin-top: .4rem;
  }
  
  
  @media (max-width: 760px) {
    
    .menu {
      grid-template-columns: 1fr;
    }
  }
`