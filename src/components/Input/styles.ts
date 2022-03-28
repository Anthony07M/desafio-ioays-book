import styled from "styled-components";

export const Container = styled.div`

    display: flex;

    height: 60px;
    width: 288px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    font-family: 'Heebo';
    margin-bottom: 16px;
    
    .content{
        display:flex;
        flex-direction: column;
        padding: 8px 0px 0px 16px;

        .name{
            font-size:12px;
            line-height:16px;
            opacity: 0.5;
            color: var(--white);
        }
        input{
            font-weight: 400;
            font-style: normal;
            font-size: 16px;
            line-height: 24px;
            color: var(--white);
            height:100% ;
            width:100% ;
            background: transparent;

        }
    }
    .children{
        display:flex ;
        align-items:center;
        justify-content: center;
        padding-right: 16px;
    }


    @media (min-width: 700px) {
        width: 368px;
        height: 60px;

        .content{
            flex:1 ;
        }
    }
`