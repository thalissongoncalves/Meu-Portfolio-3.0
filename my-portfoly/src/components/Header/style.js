import styled from 'styled-components';

export const HeaderContainer = styled.header`
    align-items: center;
    background-color: white;
    border-bottom: 1px dotted black;
    display: flex;
    font-family: 'Inter';
    font-size: 14px;
    height: 10vh;
    justify-content: center;
    position: fixed;
    width: 100%;

    nav ul {
        display: flex;
        flex-direction: row;
        font-size: 16px;
        font-weight: 500;
        justify-content: space-around;
        list-style-type: none;
        width: 500px;
    }

    nav ul li {
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    nav ul li:hover {
        transform: translateY(-2px);
    }
`