import styled from "styled-components";
import {useState, useEffect, useContext} from 'react';

export default function DiaSemana({dia, criando}) {
    const [selecionado, setSelecionado] = useState(dia.isSelected);

    function selecionarDia() {
        if (criando) {
            setSelecionado(!selecionado)
            dia.isSelected = !dia.isSelected;
        }
    }

    return (
        <CardDiaSemana onClick={selecionarDia} selected={dia.isSelected}>
            {dia.nome}
        </CardDiaSemana>
    )
}

const CardDiaSemana = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D4D4D4;
    background-color: ${props => props.selected ? "#CFCFCF" : "#FFF"};
    color: ${props => props.selected ? "#FFF" : "#DBDBDB"};
    margin-right: 4px;
`;