import styled from "styled-components";
import {useState, useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";

import { Form } from "../globalStyled";
import UserContext from "../../context/UserContext";
import {postHabito} from '../../servicos/trackIt';
import DiaSemana from "./DiaSemana";


export default function NovoHabito( {criandoHabito, setCriandoHabito}) {
    //state
    const [dias, setDias] = useState([]);
    const [nomeHabito, setNomeHabito] = useState("");
    const [disabled, setDisabled] = useState(false);

    //hooks
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    //logic
    useEffect( () => {
        setDias([
            {nome: "D", isSelected: false},
            {nome: "S", isSelected: false},
            {nome: "T", isSelected: false},
            {nome: "Q", isSelected: false},
            {nome: "Q", isSelected: false},
            {nome: "S", isSelected: false},
            {nome: "S", isSelected: false}
        ])
    }, [])

    function salvarHabito() {
        setDisabled(true);
        //pegar array dos selecionados
        const diasSelecionados = dias.map((dia, index) => {
            if (dia.isSelected) {
                return index;
            } else {
                return null;
            }
        })
        //POST API
        const body = {
            name: nomeHabito,
            days: diasSelecionados.filter(value => value !== null)
        }

        if (body.days.length === 0 ) {
            alert("Selecione pelo menos um dia da semana");
            return;
        }

        //localStorage
        const token = localStorage.getItem('token');

        postHabito(token, body)
            .then( (res) => {
                setDisabled(false)
                console.log(res.data)
                setCriandoHabito(false);
                resetarCriacaoHabito();
            })
            .catch( (err) => {
                console.log(err);
                tratarErro(err);
            })
    }

    function tratarErro(err) {
        switch (err.code) {
            case 401:
                alert("Tempo de login expirado, faça o login novamente");
                navigate("/");
                break;
            case 422:
                alert("Houve um erro, tente novamente");
                break;
            default:
                alert("Houve um erro inesperado. Recarregue a página")
        }
        resetarCriacaoHabito();
    }

    function resetarCriacaoHabito() {
        setNomeHabito("");
        setDias([
            {nome: "D", isSelected: false},
            {nome: "S", isSelected: false},
            {nome: "T", isSelected: false},
            {nome: "Q", isSelected: false},
            {nome: "Q", isSelected: false},
            {nome: "S", isSelected: false},
            {nome: "S", isSelected: false}
        ])
    }
    //render
    return (
        <CardNovoHabito criandoHabito={criandoHabito}>
            <Form 
                placeholder="nome do hábito"
                type="text"
                value={nomeHabito}
                onChange={(e) => setNomeHabito(e.target.value)}
                required
                disabled={disabled}
            />
            <DiasSemana>
                {dias.map((dia, index) => {
                    return <DiaSemana key={index} dia={dia} criando={true}/>
                })}
            </DiasSemana>
            <Botoes>
                <Botao corFundo="#FFF" cor="#52B6FF" disabled={disabled} onClick={() => setCriandoHabito(false)}>Cancelar</Botao>
                <Botao corFundo="#52B6FF" cor="#FFF" disabled={disabled} onClick={salvarHabito}>Salvar</Botao>
            </Botoes>
        </CardNovoHabito>
    )
}

const CardNovoHabito = styled.div`
    width: 340px;
    height: 180px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    display: ${props => props.criandoHabito ? "flex" : "none"};
    justify-content: center;
    flex-direction: column;
    margin-bottom: 29px;
    box-sizing: border-box;
    padding: 18px 18px 15px 19px; 
`;

const DiasSemana = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 8px 0px 29px 0px;
`;

const Botoes = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Botao = styled.div`
    width: 84px;
    height: 35px;
    border-radius: 5px;
    background-color: ${props => props.corFundo};
    color: ${props => props.cor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    margin-left: 23px;

    &:active {
        transform: translate3d(1px, 2px, 2px);
    }
`;