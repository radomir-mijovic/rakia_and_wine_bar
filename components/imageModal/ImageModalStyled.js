import styled from "styled-components";
import {motion} from "framer-motion";


export const ImageModalStyled = styled(motion.div)`
  width: 100%;
  height: 100vh;
  z-index: 20;
  position: fixed;
  background: rgba(0, 0, 0, .6);
  padding: 5rem 0;
  
  .image {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .close {
    position: fixed;
    right: 10rem;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    z-index: 22;
    transition: all .5s ease;
  }
  
  .active {
    transform: rotate(180deg) scale(.8);
  }
  
  @media (max-width: 760px) {
    
    .close {
      right: 4rem;
    }
  }
`