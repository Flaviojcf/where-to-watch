import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    margin-bottom: 2rem;

    height: 4rem;
    padding: 0 1.5rem;

    border: 0;
    border-radius: 0.5rem;

    background: var(--green);
    color: #FFF;

    font-weight: 500;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;