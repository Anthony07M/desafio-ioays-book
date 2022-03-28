import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 288px;
    height: 160px;
    background:var(--white);
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
    
    img{
        width: 81px;
        height: 122px;
        margin: 0 16px;
        filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
    }

    .main{
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3, p{
            font-weight: 400;
            font-size:12px;
            line-height: 20px;
            color: var(--gray);
        }
        
        .details-title{
            h2{
                color:var(--black);
                font-weight:500;
                font-size: 14px;
                line-height: 20px;
            }

            h3{
                color:var(--pink-secondary);
            }
        }
        
    }
    &:hover{
        cursor: pointer ;
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.1);
        transition:all 0.5s ease; 
        box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
    }

    @media (min-width: 700px) { 
        margin: 16px;

    }
`