import styled from 'styled-components';
import {useState, useContext} from 'react';

import UserContext from '../../context/UserContext';
import { checkHabito, uncheckHabito } from '../../servicos/trackIt';

export default function HabitoDia({ habitoDia, habitosDia, setHabitosMarcados }) {
    //state
    const [habitoFeito, setHabitoFeito] = useState(habitoDia.done)

    //hooks
    const {user} = useContext(UserContext);

    //logic

    function desmarcarHabito() {
        habitoDia.done = false;
        setHabitoFeito(false);
        uncheckHabito(user.token, habitoDia.id)
            .then( (res) => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    function marcarHabito() {
        habitoDia.done = true;
        setHabitoFeito(true);
        checkHabito(user.token, habitoDia.id)
            .then((res) => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    function selecionarHabitoDia() {
        if (habitoDia.done) {
            desmarcarHabito();
        } else {
            marcarHabito();
        }
        setHabitosMarcados(habitosDia.filter( habito => habito.done === true));
    }

    //render
    return(
        <CardHabitoDia>
            <DescricaoCard>
                <h4>{habitoDia.name}</h4>
                <p>Sequência atual: <DescricaoSequencia isRecord={habitoFeito}> {habitoDia.currentSequence} dias </DescricaoSequencia></p>
                <p>Seu recorde: <DescricaoSequencia isRecord={habitoDia.currentSequence === habitoDia.highestSequence && habitoDia.highestSequence !== 0}> {habitoDia.highestSequence} dias</DescricaoSequencia></p>
            </DescricaoCard>
            <BotaoCheck feito={habitoDia.done} onClick={selecionarHabitoDia}>✔️</BotaoCheck>
        </CardHabitoDia>
    )
}

const CardHabitoDia = styled.div`
    width: 340px;
    height: 94px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 13px 12px 15px;
    margin-bottom: 10px;
`;

const DescricaoCard = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    color: #666666;

    h4 {
        font-size: 20px;
        margin: 0;
    }

    p {
        font-size: 13px;
        margin: 0;
    }

`;

const DescricaoSequencia = styled.span`
        font-size: 13px;
        margin: 0;
        color: ${props => props.isRecord ? "#8FC549" : "#666666"};
`;

const BotaoCheck = styled.div`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background-color: ${props => props.feito ? "#8FC549" : "#E7E7E7"};
    display: flex;
    justify-content: center;
    align-items: center;
`;