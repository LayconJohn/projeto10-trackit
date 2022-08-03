import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import UserContext from "../../context/UserContext";

import Topo from "../elementos/Topo";
import { Tela } from "../globalStyled";
import Menu from '../elementos/Menu';
import TituloTela from '../elementos/TituloTela';
import NovoHabito from "../elementos/NovoHabito";

import { getHabitos } from "../../servicos/trackIt";

export default function Habitos() {
    //state
    const [habitos, setHabitos] = useState([]);
    const [criandoHabito, SetCriandoHabito] = useState(false);
    //hooks
    const {user} = useContext(UserContext);
    //logic

    useEffect( () => {
        getHabitos(user.token).then((res) => {
            console.log(res.data)
        })
    }, [habitos])

    function criarHabito() {
        SetCriandoHabito(true);
    }
    //render
    return (
        <Tela>
            <Topo />
            <TituloTela isDisplay={true}>
                <h2>Hábitos</h2>
                <div onClick={criarHabito}>+</div>
            </TituloTela>
            <NovoHabito 
                criandoHabito={criandoHabito}

            />
            <EspacoHabitos>
                {habitos.length === 0 ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
                :
                ""
                }
            </EspacoHabitos>
            <Menu />
        </Tela>
    )
}

const EspacoHabitos = styled.div`
    color: #666666;
    font-size: 18px;
    font-family: 'Lexend Deca', sans-serif;
`;