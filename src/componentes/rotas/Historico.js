import styled from 'styled-components'

import Topo from "../elementos/Topo";
import { Tela } from "../globalStyled";
import Menu from '../elementos/Menu';
import TituloTela from "../elementos/TituloTela";

export default function Historico() {
    return (
        <Tela>
            <Topo />
            <TituloTela>
                <h2>Histórico</h2>
                <Subtitulo>Em breve você poderá ver o histórico dos seus hábitos aqui!</Subtitulo>
            </TituloTela>
            <Menu />
        </Tela>
    )
}

const Subtitulo = styled.p`
    color: #666666;
    font-size: 18px;
    margin-left: 18px;
`;