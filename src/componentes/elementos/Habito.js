import styled from "styled-components";
import { useState, useEffect, useContext} from 'react';

import { deleteHabito } from "../../servicos/trackIt";
import UserContext from "../../context/UserContext";

import {BsTrash} from 'react-icons/bs'
import DiaSemana from "./DiaSemana";

export default function Habito( {habito, setDeletandoHabito} ) {
    const [diasSelecionados, setDiasSelecionados] = useState([]);

    const {user} = useContext(UserContext);

    function deletarHabito() {
        setDeletandoHabito(true)
        if (window.confirm("Você realmente deseja deletar esse hábito?")) {
            deleteHabito(user.token, habito.id).then((res) => {
                alert("Hábito Deletado com sucesso");
                console.log(res)
                setDeletandoHabito(false);
            })
        }
    }

    useEffect( () => {
        const array = [
            {nome: "D", isSelected: false},
            {nome: "S", isSelected: false},
            {nome: "T", isSelected: false},
            {nome: "Q", isSelected: false},
            {nome: "Q", isSelected: false},
            {nome: "S", isSelected: false},
            {nome: "S", isSelected: false}
        ]
        array.map((value, index) => {
            habito.days.map((day) => {
                if(day === index) {
                    value.isSelected = true;
                }
            })
        })
        setDiasSelecionados(array);
    },[])
    return (
        <CardHabito>
            <TituloHabito>{habito.name}</TituloHabito>
            <DiasSemana>
                {diasSelecionados.map((dia, i) => {return <DiaSemana key={i} dia={dia} criando={false}/>})}
            </DiasSemana>
            <IconeExcluirHabito onClick={deletarHabito}> <BsTrash /> </IconeExcluirHabito>
        </CardHabito>
    )
}

const CardHabito = styled.div` 
    width: 340px;
    height: 91px;
    border-radius: 5px;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    padding-left: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TituloHabito = styled.h4`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #666666;
    margin: 8px 0px;
`;

const IconeExcluirHabito = styled.div`
    width: 13px;
    height: 15px;
    position: absolute;
    top: 11px;
    right: 10px;
`;

const DiasSemana = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
   
`;

