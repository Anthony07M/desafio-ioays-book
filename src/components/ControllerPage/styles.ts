import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 24px 0;
    color: var(--black);

    .number{
        font-weight: bold;
        margin: 0 5px;
    }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        margin: 0 16px;
        border: 1px solid rgba(51, 51, 51, 0.2);
        border-radius: 50%;
        box-sizing: border-box;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        cursor: pointer;
    }
    
    .icon-disable{
        cursor: not-allowed;
        svg{
            opacity: 0.2;
        }
    }


    @media (min-width: 700px) {
        width: 80%;
        justify-content: flex-end;
    }
`