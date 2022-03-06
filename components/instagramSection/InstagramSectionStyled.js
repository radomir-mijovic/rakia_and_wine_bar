import styled from "styled-components";

export const InstagramSectionStyled = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 20rem;
  background: #CCB5AC;
  
  .image {
    position: relative;
    cursor: pointer;
    
    ::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, .2);
    }
  }
  
  .instagram-icon {
    position: absolute;
    right: .5rem;
    top: .5rem;
    z-index: 2;
  }
  
  @media (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 20vw);
  }
`