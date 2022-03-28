import styled, { keyframes } from "styled-components";

const animateModal = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 1;
    }

`

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    padding: 0 24px 24px 24px;
    transition: margin-left 4s, color 1s;
    animation: 0.8s ${animateModal} ease-out;
    
    .content-icon{
        margin-left: 20px;
        display:flex;
        justify-content:flex-end;
        align-items: center;
        height: 64px;
        width:100% ;
        text-align:left;
    }
    
    .content{
        transition: margin-left 4s, color 1s;
        display:flex;
        flex-direction: column;
        align-items:center ;
        justify-content: center;
        overflow: auto;
        height: 970px;
        width: 288px;
        background:var(--white);
        border-radius:4px;
        padding: 24px;

        img{
            width: 240px;
            height: 351px;
            margin: 72px 0 24px 0;
            filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3));
        }
        .title{
            margin-bottom: 32px;
            h2{
                font-weight:500px;
                font-size:28px;
                line-height: 40px;
                color: var(--black);
            }

            h3{
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: var(--pink-secondary);
            }
        }
        .informations{
            margin-bottom: 32px;
            width:100%;

            p{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .key{
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 28px;
                color:var(--black) ;
            }

            .value{
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color: var(--gray);
            }
        }
        
        .resenha{
            img{
                width:17px;
                height:14px;
                margin: 25px 10px 0 0;
            }
            span{ 
                color: var(--black);
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
            }
            p{
                font-family: 'Heebo';
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                color:var(--gray)
            }
        }
    }

    @media (min-width: 700px) {
        width:100%;
        height:100% ;

        .content{
            flex-direction: initial;
            width: 769px;
            height: 608px;


            img{
                width: 349px;
                height: 512.29px;
                margin: 0 48px;
            }
            
            .main{
                height: 512.29px;
                overflow: auto;
                padding-right: 40px;
            }
        }
    }

    .content-icon{
        width: 90%;
    }

    

`


export const CircleExit = styled.span`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content:center;
    background:var(--white);
    color: var(--gray);
    cursor:pointer ;

    &:hover{
        background: red;
        color:var(--white) ;
        font-weight: bold;
    }
`


