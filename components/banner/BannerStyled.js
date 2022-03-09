import styled from "styled-components";

export const BannerStyled = styled.section`
  width: 100%;
  height: 85vh;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, .5);
  }

  .header {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 2;
    padding: 4rem 0;

    > h1 {
      font-size: clamp(5.4rem, 9vw, 11rem);
      //font-family: 'Comforter Brush', cursive;
      font-family: 'Tangerine', cursive;
      color: #B28C67;
    }
  }

  .header-text {
    color: #FFFF;
    font-size: clamp(2.4rem, 5vw, 3rem);
    text-align: center;
  }

`