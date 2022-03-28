import styled from "styled-components";
import backgroundImage from '../../assets/BackgroundImage.png'

export const Container = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    background:url(${backgroundImage}) no-repeat center;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;


    .main{
        .header{
            
            display: flex;
            align-items: center;
            margin-bottom:48px;

            h2{
                margin-left: 16.6px;
                color: var(--white);
                font-size:28px;
                font-weight:300;
            }
        }
    }

    @media (min-width: 700px) {
        justify-content: flex-start;
        padding-left: 10%;

    }
`

