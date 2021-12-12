import styled from 'styled-components';

export const Container = styled.input`
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;
    border-radius: 0.5rem;
    border: 0;
    background: var(--input-background);
    color: var(--text-title);

    & + input {
        margin-top: 1rem;
    }

    &::placeholder {
        color: var(--text-body)
    }
`;