import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`
export const AboutContainer = styled.div`
    font-family: 'Moe-Mashiro','Merriweather Sans','Helvetica','Tahoma','Arial','PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei','sans-serif';
`

export const FooterContainer = styled.div`
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    &>center{
        position: relative;
        font-size: 13px;
    }
`
export const CreaterLeft = styled.span`
    margin-right: 12px;
`

export const CreaterRight = styled.span`
    margin-left: 8px;
`
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
    /*box-shadow: 2px 2px 5px #000;*/
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