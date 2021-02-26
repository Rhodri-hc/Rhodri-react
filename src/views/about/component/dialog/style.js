import styled from 'styled-components';

export const DialogContent = styled.div`
    min-height: 300px;
`;


export const MySays = styled.div`
    min-height: 20px;
`;

export const MySaysContent = styled.div`
    width: auto;
    max-width: 85%;
    display: inline-block;
    padding: 7px 13px;
    border-radius: 15px;
    color: #595a5a;
    background-color: #ebebeb;
    line-height: 1.3;
`;

export const ActionButton = styled.button.attrs({
    type : 'button',
    autoFocus : 'autofocus'
})`
    margin: 0 0.25rem;
    vertical-align: baseline;
    border: 0;
    color: #fff;
    line-height: 1;
    font-weight: 500;
   
    border-radius: 4px;
    background: #777979;
    box-shadow: 2px 3px 4px 0 rgba(0,0,0,.25);
`;
