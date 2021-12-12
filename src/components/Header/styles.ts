import styled from "styled-components";
export const Container = styled.header `
background: var(--blue)

`;

export const Content = styled.div `

display: flex;
align-items: center;
justify-content: space-between;

button {
    margin-left: auto;
    font-size: 1rem;
    color: #FFF;
    background: var(--blue--light);
    border: 0;
    padding: 0 2 rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.5);
    }
    
}

`;