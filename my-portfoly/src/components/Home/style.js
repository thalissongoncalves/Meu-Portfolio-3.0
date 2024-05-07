import styled from 'styled-components';

export const HomeContainer = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-weight: 500;
    height: 85vh;
    justify-content: center;
    width: 100%;

    .homeChangeMode {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 10px;
        width: 150px;
    }

    .homeChangeMode button {
        background-color: transparent;
        border: none;
    }

    .homeChangeMode button img {
        width: 50px;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        color: #555555;
        font-size: 1.8rem;
        font-weight: 200;
    }

    h3 {
        color: #555555;
        font-size: 1.3rem;
        font-weight: 200;
    }

    .homeButtons {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        width: 350px;
    }

    .homeButtons button {
        background-color: black;
        border-color: black;
        border-radius: 50px;
        border-style: solid;
        border-width: 2px;
        color: white;
        padding: 15px;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 150px;
    }

    .homeButtons button:hover {
        background-color: white;
        border-color: black;
        border-style: solid;
        border-width: 2px;
        color: black;
    }

    .homeIcons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80px;
    }

    .homeIcons a img {
        margin-top: 30px;
        width: 30px;
    }
`