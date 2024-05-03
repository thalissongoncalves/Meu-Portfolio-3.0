import styled from 'styled-components';

export const HeaderContainer = styled.header`
    align-items: center;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    font-family: 'Inter';
    font-size: 14px;
    height: 5rem;
    justify-content: space-around;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;

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

    nav ul li {
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    nav ul li:hover {
        transform: translateY(-2px);
    }
`