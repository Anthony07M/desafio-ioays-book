import styled from "styled-components";

export const Container = styled.div`

`

export const Error = styled.div`
  &::before {
    content: "";
    position: absolute;
    left: 1rem;
    top: -0.5rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid rgba(255, 255, 255, 0.4);
    }
    padding: 1rem;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    position: relative;
    margin-top: 0.5rem;
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    width: 240px;
    color: #ffffff;
`;