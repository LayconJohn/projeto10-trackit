import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {ThreeDots } from 'react-loader-spinner';

import { cadastrarUser } from "../../servicos/trackIt";

import logo from "../../assets/images/logoPrincipal.png";

import { Tela, Form, BotaoForm, LinkRota, EspacoForm, Logo } from "../../globalStyled";

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [urlFoto, setUrlFoto] = useState("");
    const [disabledInput, setDisabledInput] = useState(false);

    const navigate = useNavigate();

    function cadastrarUsuario(e) {
        e.preventDefault();

        setDisabledInput(true);

        const body = {
            email: email,
            name: nome,
            image: urlFoto,
            password: senha
        }

        cadastrarUser(body)
            .then( (res) => {
            console.log(res);
            navigate("/")

        })
            .catch( (err) => {
                console.log(err);
                alert("Campos inválidos, preencha corretamente");
                setDisabledInput(false);
            })

    }

    return (
        <Tela>
            <Logo src={logo} alt="trackit"/>
            <EspacoForm> 
                <form onSubmit={(e) => cadastrarUsuario(e)}>
                    <Form 
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        disabled={disabledInput}
                        required 
                    />
                    <Form 
                        placeholder="senha"
                        type="password"
                        value={senha}
                        onChange={ (e) => setSenha(e.target.value)}
                        disabled={disabledInput}
                        required 
                    />
                    <Form 
                        placeholder="Nome"
                        type="text"
                        value={nome}
                        onChange={ (e) => setNome(e.target.value)}
                        disabled={disabledInput}
                        required 
                    />
                    <Form 
                        placeholder="Foto"
                        type="url"
                        value={urlFoto}
                        onChange={ (e) => setUrlFoto(e.target.value)}
                        disabled={disabledInput}
                        required 
                    />
                    <BotaoForm type="submit" disabled={disabledInput}>
                        {disabledInput ? 
                        <ThreeDots 
                        height="80" 
                        width="80" 
                        radius="9"
                        color="#FFF" 
                        ariaLabel="three-dots-loading"

                        visible={true}
                         />
                        :
                        "Cadastrar"}
                    </BotaoForm>
                </form>
                <LinkRota onClick={() => navigate("/")}>Já tem uma conta? Faça login</LinkRota>
                
            </EspacoForm>
        </Tela>
    )
}





