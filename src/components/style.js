import styled from 'styled-components';

export const Title = styled.h3`
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