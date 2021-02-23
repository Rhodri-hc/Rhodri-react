import styled from 'styled-components';
import swapperImg from '../../assets/images/anime-sky.jpg'

export const Swapper = styled.div`
    // background: url(${swapperImg}) no-repeat 60%;
`

export const AboutTitle = styled.h3`
    color: #222;
    display: inline-block;
    position: relative;
    letter-spacing: 0.1em;
    line-height: 1.625;
    margin: 1.25rem 0;
    &:after{
        content: '';
        display: block;
        position: absolute;
        bottom: 0.125rem;
        left: 0.25rem;
        --bg-opacity: 1;
        background-color: #b71c1c;
        background-color: rgba(169, 8, 8, 0.30);
        /* background-color: rgba(183, 28, 28, 0.25); */
        width: 100%;
        height: 0.5rem;
    }
`;

export const AboutMeet = styled.span`
    display: inline-block;
    padding: 10rem 5px 2rem;
    margin-top: 1rem;
`;

export const UpdatedTime = styled.i`
    display: inline-block;
    margin:2rem 0 3rem;
    color: #c5c5c5;
`

