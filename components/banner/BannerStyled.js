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
    justify-content: space-evenly;
    z-index: 2;

    > h1 {
      font-size: clamp(5.6rem, 8vw, 11rem);
      font-family: 'Comforter Brush', cursive;
      color: #B28C67;
    }
  }

  .header-text {
    color: #FFFF;
    font-size: clamp(3rem, 7vw, 4rem);
    text-align: center;
  }

`