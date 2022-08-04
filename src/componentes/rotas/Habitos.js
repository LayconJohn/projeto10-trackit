import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import UserContext from "../../context/UserContext";

import Topo from "../elementos/Topo";
import { Tela } from "../globalStyled";
import Menu from '../elementos/Menu';
import TituloTela from '../elementos/TituloTela';
import NovoHabito from "../elementos/NovoHabito";
import Habito from "../elementos/Habito";

import { getHabitos } from "../../servicos/trackIt";

export default function Habitos() {
    //state
    const [habitos, setHabitos] = useState([]);
    const [criandoHabito, setCriandoHabito] = useState(false);
    const [deletandoHabito, setDeletandoHabito] = useState(false);

    //hooks
    const {user} = useContext(UserContext);
    //logic

    useEffect( () => {  
        getHabitos(user.token).then((res) => {
            setHabitos(res.data)
            console.log(res.data)
        })
    }, [criandoHabito, deletandoHabito])

    function criarHabito() {
        setCriandoHabito(true);
    }
    //render
    return (
        <Tela>
            <Topo />
            <TituloTela isDisplay="flex">
                <h2>Hábitos</h2>
                <div onClick={criarHabito}>+</div>
            </TituloTela>
            <NovoHabito 
                criandoHabito={criandoHabito}
                setCriandoHabito={setCriandoHabito}
            />
            <EspacoHabitos>
                {habitos.length === 0 ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
                :
                habitos.map(habito => {
                    return <Habito 
                        key={habito.id} 
                        habito={habito}
                        setDeletandoHabito={setDeletandoHabito}
                        />
                })
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
    margin: 0;
    margin-bottom: 100px;
`;