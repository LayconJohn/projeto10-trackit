import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import UserContext from "../../context/UserContext";

export default function Topo() {

    const navigate = useNavigate();
    const {user} = useContext(UserContext)

    return (
        <Header>
            <MiniLogo onClick={() => navigate("/")}>TrackIt</MiniLogo>
            <FotoPerfil src={localStorage.getItem('image')} alt={localStorage.getItem('name')}/>
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

const FotoPerfil = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 100px;
    object-fit: co;
    border: 1px solid rgbs(0, 0, 0, 0.4)
`;