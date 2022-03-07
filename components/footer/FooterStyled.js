import styled from "styled-components";

export const FooterStyled = styled.section`
  width: 100%;
  height: auto;
  background: #151412;
  padding: 3rem 0 1rem;
  

  .logo-links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  
  .logo {
    position: relative;
  }

  .links {
    height: 3rem;
    width: 10rem;
    display: flex;
    justify-content: space-between;

    > a {
      height: 100%;
      position: relative;
    }
  }
  
  .contact {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    position: relative;
    margin: 2rem 0;
    
    ::after, ::before {
      content: "";
      width: 80%;
      background: #EEEBE1;
      position: absolute;
      height: 1.5px;
    }
    
    ::after {
      bottom: 0;
    }
    
    ::before {
      top: 0;
    }
    
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 2.4rem 0;
      cursor: pointer;
      
    }
    
    > div > h5 {
      font-size: 1.8rem;
      color: #FFFF;
      text-transform: uppercase;
      margin: 1.4rem 0;
    }
    
    > div > h6 {
      font-size: 1.5rem;
      color: #848B88;
    }
  }
  
  .rights {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 2rem;
    
    > h6 {
      font-size: 1rem;
      color: #848B88;
    }
  }
  
  @media (max-width: 760px) {
    
    .contact {
      flex-direction: column;
    }
  }
  
`