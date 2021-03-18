import styled, { keyframes } from 'styled-components';
import portrait from './assets/images/Ultraman.jpg'


const animateGlow = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`


export const Ultraman = styled.div`
  background-image: url(${portrait});
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.75);
    -webkit-filter: blur(3rem);
    -moz-filter: blur(3rem);
    -ms-filter: blur(3rem);
    filter: blur(3rem);
    background: linear-gradient(270deg, #fed7d7, #e53e3e);
    background-size: 200% 200%;
    animation: ${animateGlow} 5s ease infinite;
`

export const TitleNav = styled.p`
    text-align-last: justify;
`
