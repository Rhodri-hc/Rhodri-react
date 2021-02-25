import styled from 'styled-components';

export const DialogContent = styled.div`
    min-height: 300px;
`;


export const MySays = styled.div`
    min-height: 20px;
`;


export const ActionContent = styled.div`
    padding: 10px 20px;
    text-align: right;
`;

export const ActionButton = styled.button.attrs({
    type : 'button',
    autoFocus : 'autofocus'
})`
    margin: 0 10px;
    vertical-align: baseline;
    border: 0;
    color: #fff;
    line-height: 1;
    font-size: 14px;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 4px;
    background: #777979;
    box-shadow: 2px 3px 4px 0 rgba(0,0,0,.25);
`;
