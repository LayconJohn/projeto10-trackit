import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Menu( {percentual} ) {
    const navigate = useNavigate();

    return (
        <Footer>
            <AbaMenu onClick={() => navigate("/habitos")}>Hábitos</AbaMenu>
            <BotaoHoje onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    value={percentual}
                    background
                    backgroundPadding={6}
                    
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                      })}
                />
                <ProgressoHoje>Hoje</ProgressoHoje>
            </BotaoHoje>
            <AbaMenu onClick={() => navigate("/historico")}>Histórico</AbaMenu>
        </Footer>
    )
}

const Footer = styled.footer`
    width: 100%;
    height: 70px;
    border: 1px solid rgba(0 ,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    margin-top: 100px;
    background-color: rgba(229, 229, 229, 0.5);
`;

const BotaoHoje = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: fixed;
    bottom: 10px;
    margin: 0 auto;
    border: 1px solid #52B6FF;
    z-index: 2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

`;


const ProgressoHoje = styled.div`
    height: 79px;
    width: 69px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    bottom: 20px;
    z-index: 3;
`;

const AbaMenu = styled.span`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: #52B6FF;
`;