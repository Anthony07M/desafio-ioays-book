import styled from "styled-components";
import backgroundImage2 from '../../assets/background2.png'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background:var(--white);


    .header{
            
            display: flex;
            align-items: center;
            justify-content:space-around ;
            margin:48px 0;
            width: 100%;
            padding: 0 20px;

            h2{
                margin-left: 16.6px;
                color: var(--black);
                font-size:28px;
                font-weight:300;
            }

            span:nth-child(1){
                display: flex;
            }

            .circle{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 32px;
                width: 32px;
                border: 1px solid rgba(51, 51, 51, 0.2);
                border-radius:50% ;
            }
        }

        @media (min-width: 700px) { 

            background:url(${backgroundImage2}) no-repeat center;
            background-attachment: fixed;
            background-size: cover;

            .list{
                width: 95%;
                display:flex;
                flex-wrap:wrap;
                justify-content: center;
            }

            .header{
                width: 80%;
                justify-content: space-between;
            }

        }
        
`


