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
    justify-content: space-around;
    gap: 1rem;
    width: 100%;
    margin-bottom: 8rem;
  }
  
  .tab {
    width: 100%;
    height: 10rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    //background: red;
  }
  
  .active {
    ::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      width: 60%;
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
    font-size: clamp(1.8rem, 3.5vw, 4rem);
    font-weight: 400;
    letter-spacing: .3rem;
    color: #B28C67;
    text-align: center;
  }
  
  .menu {
    width: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem 2rem;
    padding: 0 4vw;
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
    height: 100%;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .info-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    
    > header {
      font-size: 2rem;
      text-transform: uppercase;
      color: black;
      margin-bottom: 0;
    }
  }
  
  .price {
    color:  #848B88;
    font-size: 1.8rem;
  }
  
  .description {
    color: black;
    font-size: clamp(1.6rem, 2vw, 1.8rem);
    margin-top: .4rem;
  }
  
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    > p {
      margin: 0;
      font-size: clamp(1.6rem, 2vw, 1.8rem);
    }
  }
  
  .image-price {
    position: relative;
    width: 8.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
  }
  
  .black {
    color: black;
    font-size: clamp(1.6rem, 2vw, 1.8rem);
    margin: 0;
  }
  
  
  @media (max-width: 760px) {
    
    .tabs {
      margin-bottom: 5rem;
    }
    
    .menu {
      grid-template-columns: 1fr;
      padding: 0 .7rem;
    }
    
    .icon {
      width: 3rem;
      height: 4rem;
      margin-top: -1rem;
    }
  }
  
  @media (max-width: 415px) {
    
    //.info-header {
    //  flex-direction: column;
    //  align-items: flex-start;
    //}
  }
`