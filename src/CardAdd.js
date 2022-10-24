import DiasDosHabitos from "./DiasDosHabitos";
import styled from "styled-components"
import { useContext, useEffect } from "react";
import UserContext from "./contextApi";
import { useState } from "react";
import axios from "axios";
import days from "./Days";

export default function CardAdd({habitosCriados}) {

    console.log(habitosCriados)
    const [habits, setHabits] = useState("");
    const { setDisplay, display, dias, mostraMensagem, setMostraMensagem} = useContext(UserContext);
   
    const token = JSON.parse(localStorage.getItem('token'));

    if(habitosCriados === []){
        setMostraMensagem("");
    }else{
        setMostraMensagem("none");
    }

    function CriarHabito(e) {
        e.preventDefault();
        setDisplay("none");
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const habito = {
            name: habits,
            days: dias
        }

        const promisse = axios.post(URL, habito, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        promisse.then((res) => {
            console.log(res.data);
            localStorage.setItem('habito', JSON.stringify(res.data));
        });
    }

    return (
        <>
            <Mensagem display={display} mostraMensagem={mostraMensagem}>
                <form onSubmit={CriarHabito} >
                    <input id="habits"
                        type="text"
                        value={habits}
                        onChange={(e) => setHabits(e.target.value)}
                        placeholder="nome do habito"
                        required />
                    <div>
                        {days.map((d, index) => <DiasDosHabitos d={d} key={index} i={index} />)}
                    </div>
                    <Cancelar onClick={() => setDisplay("none")}>
                        <h6>Cancelar</h6>
                    </Cancelar>
                    <Salvar type="submit">
                        <h6>Salvar</h6>
                    </Salvar>
                </form>
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
               
            </Mensagem>
           
        </>
    )

}

const Mensagem = styled.div`
margin-top: 30px;
margin-bottom: 120px;
box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 74px; 
    display: ${props => props.display};
 width: 340px;
h2{
    display: ${props => props.mostraMensagem};
    font-family: Lexend Deca;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
}
form{
 width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 30px;
display: ${props => props.display};
input{
    width: 303px;
height: 45px;
margin-left: 5px;
margin-top: 10px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
}
div{
    display: flex;
    margin-top:10px;
    margin-left:5px ;
    letter-spacing: 10px;
}
}
`
const Cancelar = styled.button`
width: 84px;
height: 35px;
margin-left: 130px;
margin-top: 30px;
margin-right:30px ;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
/* identical to box height */
background: white;
text-align: center;
border: none;
color: #52B6FF;
`
const Salvar = styled.button`
width: 84px;
height: 35px;
left: 165px;
top: 284px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
background: #52B6FF;
border-radius: 4.63636px;
text-align: center;
border: none;
color: white;
`

