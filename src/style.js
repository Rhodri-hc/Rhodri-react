import styled, { keyframes } from 'styled-components';
import portrait from './assets/images/Ultraman.jpg'

const heartbeat = keyframes`
    0%{
        transform: scale(0.8,0.8);
        opacity: 1;
    }
    25%{
        transform: scale(1,1);
        opacity: 0.8;
    }
    100%{
        transform: scale(0.8,0.8);
        opacity: 1;
    }
`
const animateGlow = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`

export const CreaterHeart = styled.i`
    display: inline-block;
    position:absolute;
    left: 50%;
    top:50%;
    margin-left: 0;
    margin-top: -0.5rem;
    width: 0.9375rem;
    height: 1rem;
    background: transparent;
    filter:drop-shadow(0px 0px 0.1875rem rgb(255,20,20));
    animation: ${heartbeat} 1s linear infinite;
    &:before, &:after{
        content: "";
        position: absolute;
        left: 0.5rem;
        width: 0.5rem;
        height: 0.75rem;
        background: rgb(255,0,0);
        border-radius: 0.5rem 0.5rem 0 0;
        transform:rotate(-45deg);
        transform-origin: 0 100%;
    }
    &:after{
        left: 0;
        transform:rotate(45deg);
        transform-origin: 100% 100%;
    }
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
