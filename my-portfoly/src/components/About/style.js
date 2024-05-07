import styled from 'styled-components';

export const AboutContainer = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-weight: 400;
    height: 80vh;
    justify-content: center;
    width: 100%;

    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 15px;
        font-weight: 200;
    }

    .cardsAboutMe {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 10px;
        margin-bottom: 50px;
        width: 90%;
    }

    .cardOne {
        border: none;
        border-radius: 25px;
        height: 70vh;
        overflow: hidden;
        width: 18em;
    }

    .cardOne img {
        transition: opacity 0.3s ease, transform 1s ease;
        width: 100%;
    }

    .cardOne img:hover {
        opacity: 0.99;
        transform: scale(1.05);
    }

    .cardTwo {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border: 1px solid black;
        border-radius: 25px;
        height: 70vh;
        overflow: hidden;
        width: 18em;
    }

    .certificateIcon {
        width: 25px;
    }

    .cardTwo div {
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .cardTwo h3 {
        font-size: 15px;
    }

    .cardTwo h4 {
        font-size: 12px;
        font-weight: 200;
    }

    .cardTwo p {
        font-size: 14px;
        font-weight: 300;
        text-align: center;
    }

    .cardTwo hr {
        width: 80%;
    }

    .cardTwo button {
        background-color: black;
        border-color: black;
        border-radius: 50px;
        border-style: solid;
        border-width: 2px;
        color: white;
        padding: 5px;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 150px;
    }

    .cardTwo button:hover {
        background-color: white;
        border-color: black;
        border-style: solid;
        border-width: 2px;
        color: black;
    }

    .cardTwo div img, .cardTwo div h3, .cardTwo div h4, .cardTwo div p, .cardTwo div button {
        margin: 3px;
    }

    .cardThree {
        align-items: center;
        border: 1px solid black;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        height: 70vh;
        justify-content: center;
        width: 18em;
    }

    .maletaIcon {
        width: 20px;
    }

    .cardThree h3 {
        font-size: 15px;
    }

    .cardThree h4 {
        font-size: 12px;
        font-weight: 200;
    }

    .cardThree p {
        font-size: 14px;
        font-weight: 300;
        text-align: center;
    }

    .cardThree img, .cardThree h3, .cardThree h4, .cardThree h5, .cardThree p, .cardThree ul {
        margin: 3px;
    }

    .cardThree h5 {
        font-size: 12px;
    }

    .cardThree ul {
        display: flex;
        flex-direction: column;
        font-size: 10px;
        justify-content: left;
        padding: 0 40px;
    }

    .cardThree ul li::marker {
        color: #555555;
    }

    .cardDescription {
        border-right: 1px solid black;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
        border-radius: 25px;
        display: none;
        font-size: 14px;
        font-weight: 400;
        margin-top: -25px;
        padding-top: 30px;
        padding-bottom: 20px;
        padding-right: 20px;
        padding-left: 20px;
    }
`