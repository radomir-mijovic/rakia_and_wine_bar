import styled from "styled-components";


export const LetsHaveDrinkStyled = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .title {
    font-size: clamp(3rem, 4vw, 5rem);
    text-transform: uppercase;
    font-weight: 500;
    margin: 8rem 0 7rem;
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
`