import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../context/UserContext";

import Cadastro from "./rotas/Cadastro";
import Home from './rotas/Home';
import Habitos from "./rotas/Habitos";
import Hoje from "./rotas/Hoje";
import Historico from "./rotas/Historico";

export default function App() {
    const [user, setUser] = useState({});
    const [percentualConcluido, setPercentualConcluido] = useState(0);

    return(
        <BrowserRouter>
        <UserContext.Provider value={ {user, setUser} }>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />  
            <Route path="/habitos" element={<Habitos percentualConcluido={percentualConcluido}/>} />
            <Route path="/hoje" element={<Hoje 
                percentualConcluido={percentualConcluido}
                setPercentualConcluido={setPercentualConcluido}    
            />} />  
            <Route path="/historico" element={<Historico percentualConcluido={percentualConcluido}/>} />      
        </Routes>
        </UserContext.Provider>
        </BrowserRouter>
    )
}

