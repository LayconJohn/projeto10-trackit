import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import styled from 'styled-components';
import { useEffect, useState, useContext } from "react";

import { getHabitosDia } from "../../servicos/trackIt";
import UserContext from "../../context/UserContext";

import TituloTela from '../elementos/TituloTela';
import Topo from "../elementos/Topo";
import { Tela } from "../globalStyled";
import Menu from '../elementos/Menu';
import HabitoDia from "../elementos/HabitoDia";

export default function Hoje() {
    //state
    const [habitosDia, setHabitosDia] = useState([]);

    //hooks
    const {user} = useContext(UserContext);

    //logic
    useEffect( () => {
        getHabitosDia(user.token).then( (res) => {
            setHabitosDia(res.data)
        })
    }, [])

    //render
    return (
        <Tela>
            <Topo />
            <TituloTela isDisplay="">
                <h2>{dayjs().locale('pt-br').format("dddd, DD/MM")}</h2>
                <p>{true ? "Nenhum hábito concluído ainda..." : ""}</p>
            </TituloTela>
            <EspacoHabitosDia>
                {habitosDia.length === 0 ? "Carregando..." : habitosDia.map( habitoDia => {
                    return <HabitoDia habitoDia={habitoDia}/>
                })}
            </EspacoHabitosDia>
            <Menu />
        </Tela>
    )
}

const EspacoHabitosDia = styled.div`
    margin-top: 28px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
