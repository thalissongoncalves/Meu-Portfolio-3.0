import styled from 'styled-components';

export const HeaderContainer = styled.header`
    align-items: center;
    display: flex;
    flex-direction: row;
    font-family: 'Inter';
    font-size: 14px;
    height: 5rem;
    justify-content: space-around;
    width: 100%;

    p {
        font-size: 20px;
        font-weight: 400;
    }

    p:hover {
        cursor: pointer;
    }

    nav ul {
        display: flex;
        flex-direction: row;
        font-size: 15px;
        justify-content: space-around;
        list-style-type: none;
        width: 400px;
    }

    nav ul li a {
        color: black;
        text-decoration: none;
    }

    nav ul li {
        transition: transform 0.5s;
    }

    nav ul li:hover {
        transform: scale(1.1);
    }
`