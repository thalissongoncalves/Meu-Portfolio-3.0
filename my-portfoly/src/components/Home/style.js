import styled from 'styled-components';

export const HomeContainer = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-size: 30px;
    font-weight: 500;
    height: 32rem;
    justify-content: center;
    width: 100%;

    .homeChangeMode {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 20px;
        width: 150px;
    }

    .homeChangeMode button {
        background-color: transparent;
        border: none;
    }

    .homeChangeMode button img {
        width: 50px;
    }

    h2 {
        color: #555555;
        font-size: 30px;
        font-weight: 500;
    }

    h3 {
        color: #555555;
        font-size: 20px;
        font-weight: 300;
    }

    .homeButtons {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        width: 300px;
    }

    .homeButtons button {
        background-color: black;
        border-color: black;
        border-radius: 50px;
        border-style: solid;
        border-width: 2px;
        color: white;
        padding: 15px;
        width: 120px;
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
        width: 100px;
    }

    .homeIcons a img {
        margin-top: 20px;
        width: 30px;
    }
`