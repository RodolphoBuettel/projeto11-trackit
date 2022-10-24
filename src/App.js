import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contextApi";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Hoje from "./Hoje";

import GlobalStyle from "./GlobalStyle";

export default function App() {

    return (
        <UserProvider>
        <BrowserRouter>
        <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/habitos" element={<Habitos />} />
                <Route path="/hoje" element={<Hoje/>}/>
                {/* <Route path="/historico" element={<Historico/>}/> */}
            </Routes>
        </BrowserRouter>
        </UserProvider>
    )
}

