import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../servicos/trackIt";

import {ThreeDots } from 'react-loader-spinner';
import logo from "../../assets/images/logoPrincipal.png";

import { Tela, Form, BotaoForm, LinkRota, EspacoForm, Logo } from "../globalStyled";
import UserContext from "../../context/UserContext";

export default function Home() {
    //state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabledInput, setDisabledInput] = useState(false);

    //hooks
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    //logic
    function resetarForm() {
        setEmail("");
        setPassword("");
        setDisabledInput(false);
    }

    function fazerLogin(e) {
        e.preventDefault();

        setDisabledInput(true);

        const body = {
            email: email,
            password: password
        }

        loginUser(body)
            .then( ( {data}) => {
            setUser({
                token: data.token,
                image: data.image,
                name: data.name  
            })
            navigate("/habitos");
        })
            .catch( (err) => {
                console.log(err);
                alert("Campo incorreto! Preencha novamente.")
                resetarForm();
            })

    }

    //render
    return (
        <Tela>
            <Logo src={logo} alt="trackit"/>
            <EspacoForm>
                <form onSubmit={(e) => fazerLogin(e)}>
                    <Form 
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        disabled={disabledInput}
                        required 
                    />
                    <Form 
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                        disabled={disabledInput}
                        required 
                    />
                    <BotaoForm type="submit">
                        {disabledInput ? 
                        <ThreeDots 
                        height="80" 
                        width="80" 
                        radius="9"
                        color="#FFF" 
                        ariaLabel="three-dots-loading"
                        visible={true} />
                        : 
                        "Entrar"}
                    </BotaoForm>
                </form>
                <LinkRota onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</LinkRota>
            </EspacoForm>
        </Tela>
    )
}