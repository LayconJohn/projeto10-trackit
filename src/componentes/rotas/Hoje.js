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
    const [habitosMarcados, setHabitosMarcados] = useState([]);
    const [percentualConcluido, setPercentualConcluido] = useState("...");

    //hooks
    const {user} = useContext(UserContext);

    //logic
    useEffect( () => {
        getHabitosDia(user.token).then( (res) => {
            setHabitosDia(res.data);
            setHabitosMarcados(habitosDia.filter( habito => habito.done === true));
            setPercentualConcluido((habitosMarcados.length/habitosDia.length) * 100)
        });
    }, [habitosMarcados])

    //render
    return (
        <Tela>
            <Topo />
            <TituloTela isDisplay="">
                <h2>{dayjs().locale('pt-br').format("dddd, DD/MM")}</h2>
                <SubTitulo habitoFeito={habitosMarcados.lenght === 0}>
                    {habitosMarcados.lenght === 0 ? 
                        "Nenhum hábito concluído ainda..." 
                        : 
                        `${percentualConcluido}% dos hábitos concluídos `}
                </SubTitulo>
            </TituloTela>
            <EspacoHabitosDia>
                {habitosDia.length === 0 ? 
                "Carregando..." 
                : 
                habitosDia.map( (habitoDia, index) => {
                    return <HabitoDia 
                        key={index}
                        habitoDia={habitoDia}
                        habitosDia={habitosDia}
                        setHabitosMarcados={setHabitosMarcados}
                    />
                })}
            </EspacoHabitosDia>
            <Menu percentual={percentualConcluido}/>
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

const SubTitulo = styled.p`
    color: #BABABA;
    font-size: 18px;
    color: ${props => props.habitoFeito ? "#BABABA" : "#8FC549"};
    margin-left: 17px;
`;
