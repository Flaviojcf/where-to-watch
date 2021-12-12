import styled from 'styled-components';

export const Container = styled.div`
    background: var(--background);

    display: flex;
`;

export const Content = styled.main`
    width: 100%;
    max-width: 500px;
    
    margin: 8rem auto 0;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;


    h1 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--text-title);
    }

    p {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        color: var(--text-body);
    }

    label {
        margin: 1rem 0 2rem 0;
        width: 100%;

        color: var(--text-title);

        input[type="checkbox"] {
            margin-right: 0.5rem;

            &::checked {
                border-color: var(--blue);
                background-color: var(--blue);
            }
        }
    }

    p.other-option {
        width: 100%;
        text-align: center;

        color: var(--text-title);

        a {
            margin-left: 0.5rem;
            text-decoration: none;
            color: var(--blue);
        }
    } 
`;