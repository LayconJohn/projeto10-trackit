import styled from 'styled-components'
import Calendar from 'react-calendar';
import {useState, useEffect} from 'react';

import 'react-calendar/dist/Calendar.css';

import Topo from "../elementos/Topo";
import { Tela } from "../globalStyled";
import Menu from '../elementos/Menu';
import TituloTela from "../elementos/TituloTela";

export default function Historico( {percentualConcluido} ) {
    const [date, setDate] = useState(new Date());

    return (
        <Tela>
            <Topo />
            <TituloTela>
                <h2>Histórico</h2>
                <Subtitulo>Em breve você poderá ver o histórico dos seus hábitos aqui!</Subtitulo>
            </TituloTela>
            <ConteinerCalendario>
                <Calendar onChange={setDate} value={date}/>
            </ConteinerCalendario>
            <Menu percentual={percentualConcluido}/>
        </Tela>
    )
}

const Subtitulo = styled.p`
    color: #666666;
    font-size: 18px;
    margin-left: 18px;
`;

const ConteinerCalendario = styled.div`

    
    .react-calendar {
        width: 335px;
        height: 402px;
        border-radius: 10px;
    }

    .react-calendar__month-view__days__day {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0px;
        
    }
`;