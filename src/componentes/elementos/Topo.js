import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {MdLogout} from 'react-icons/md';

import UserContext from "../../context/UserContext";

export default function Topo() {

    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    function deslogar() {
        if (window.confirm("Você deseja mesmo sair da sua conta?")) {
            localStorage.setItem('token', "");
            navigate('/')
        }

    }

    return (
        <Header>
            <MiniLogo onClick={() => navigate("/")}>TrackIt</MiniLogo>
            
            <AreaPerfil>
                <IconeLogOut onClick={deslogar}> <MdLogout /> </IconeLogOut>
                <FotoPerfil src={localStorage.getItem('image')} alt={localStorage.getItem('name')}/>
            </AreaPerfil>
            
        </Header>
    )
}

const Header = styled.header`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 18px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 1;
    margin-bottom: 100px;
`;

const MiniLogo = styled.h2`
    font-size: 40px;
    font-family: 'Playball', cursive;
    color: #FFF;
    font-weight: 400;
`;

const AreaPerfil = styled.div`
    display: flex;
    align-items: center;
`;

const IconeLogOut = styled.div`
    width: 60px;
    height: 60px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FotoPerfil = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 100px;
    object-fit: cover;
    border: 1px solid rgbs(0, 0, 0, 0.4)
`;