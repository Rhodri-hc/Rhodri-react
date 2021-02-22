import styled, { keyframes } from 'styled-components';


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
export const CreaterHeart = styled.i`
    display: inline-block;
    position:absolute;
    left: 50%;
    top:50%;
    margin-left: 0px;
    margin-top: -8px;
    width: 15px;
    height: 40px;
    background: transparent;
    filter:drop-shadow(0px 0px 3px rgb(255,20,20));
    animation: ${heartbeat} 1s linear infinite;
    &:before, &:after{
        content: "";
        position: absolute;
        left: 8px;
        width: 8px;
        height: 12px;
        background: rgb(255,0,0);
        border-radius: 8px 8px 0 0;
        transform:rotate(-45deg);
        transform-origin: 0 100%;
    }
    &:after{
        left: 0;
        transform:rotate(45deg);
        transform-origin: 100% 100%;
    }
`