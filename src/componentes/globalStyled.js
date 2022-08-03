import styled from "styled-components";

const Tela = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    box-sizing: border-box;
`;

const Logo = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 68px;
`;

const Form = styled.input` 
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin-bottom: 6px;
`;

const BotaoForm = styled.button`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background-color: #52B6FF;
    color: #FFF;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        opacity: 0.7;
    }
`;

const LinkRota = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    color: #52B6FF;
    font-weight: 400;
    margin-top: 25px;
    text-decoration: underline;
`;

const EspacoForm = styled.div`
    width: 304px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px 40px;
`;

export {Tela, Form, BotaoForm, LinkRota, EspacoForm, Logo};