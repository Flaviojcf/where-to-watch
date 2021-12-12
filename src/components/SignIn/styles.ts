import styled from "styled-components";

export const Container = styled.div`
    background: var(--background);
    display: flex;
`;

export const Content = styled.main `
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

    input {
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;
    border-radius: 0.5rem;
    border: 0;
    background: var(--input-background);
    color: var(--text-title);

    &+ input{
        margin-top: 1rem;
    }

    &::placeholder {
        color: var(--text-body)
    }

}


label {
        margin: 1rem 0 2rem 0;
        width: 100%;
      

        color: var(--text-title);

        }

input[type="checkbox"] {
            height: auto;
            width: auto;
            margin:  1rem 0.5rem 2rem 0;
}

    button {
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

}

        a {
            margin-left: 0.5rem;
            text-decoration: none;
            color: var(--blue);
        }
        
.adicionais {
    text-align: center;
}
`
