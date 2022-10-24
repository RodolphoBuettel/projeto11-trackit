import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import days from "./Days";
import Dias from "./Dias";
import excluir from "./images/excluir.png";

export default function ListaHabitos({ h }) {

    const id = h.id;
    const token = JSON.parse(localStorage.getItem('token'));

    function DeletarHabito() {

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

        const promisse = axios.delete(URL,
            {
                headers:
                    { 'Authorization': `Bearer ${token}` }
            });
            promisse.then((res) => {
                console.log(res);
            });
            promisse.catch((erro) => {
                console.log(erro.response.data);
            })

    }

    return (
        <Habit>
            <img src={excluir} onClick={DeletarHabito} />
            <Nome>{h.name}</Nome>
            <div>
                {days.map((d, index) => <Dias d={d} key={index} i={index} diasDoHabito={h.days} />)}
            </div>
        </Habit>
    )
}

const Habit = styled.div`
    width: 340px;
height: 91px;
left: 17px;
top: 147px;
margin-bottom: 10px;
margin-top: 0px;
background: #FFFFFF;
padding-top: 10px;
box-sizing: border-box;
border-radius: 5px;
div{
    display: flex;
}
img{
    margin-left: 310px;
    color: #666666;
    width: 13px;
    height: 13px;
}
`
const Nome = styled.h2`
margin-left: 10px;
margin-top: -20px;
margin-bottom: 10px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */
color: #666666;
`
