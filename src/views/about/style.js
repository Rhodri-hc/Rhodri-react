import styled from 'styled-components';
import swapperImg from '../../assets/images/anime-sky.jpg'

export const AboutContent = styled.div`
    position: relative;
`;

export const Swapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 14rem;
    background: url(${swapperImg}) no-repeat 60%;
`
export const HIRhodri = styled.p.attrs({
    'data-text' : 'HI,RHODRI!'
})`
    color: #fff;
    font-size: 35px;
    letter-spacing: 3px;
    font-weight: 700;
`

export const AboutBlock = styled.div`
    margin: 0 auto;
    width: 780px;
`

export const AboutTitle = styled.h3`
    color: #fff;
    display: inline-block;
    position: relative;
    letter-spacing: 5px;
    line-height: 1.625;
    margin: 18px 0;
    &:after{
        content: '';
        display: block;
        position: absolute;
        bottom: 2px;
        left: 4px;
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

