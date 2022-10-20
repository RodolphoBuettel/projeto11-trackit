import DiasDosHabitos from "./DiasDosHabitos";
import styled from "styled-components"
import { useContext } from "react";
import UserContext from "./contextApi";
import { useState } from "react";

export default function CardAdd(){

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [habits, setHabits] = useState("");
    const {display} = useContext(UserContext);

    return(
        <Mensagem display={display}>
                <form>
                    <input id="habits"
                        type="text"
                        value={habits}
                        onChange={(e) => setHabits(e.target.value)}
                        placeholder="nome do habito"
                        required />
                    <div>
                        {days.map((d, index) => <DiasDosHabitos d={d} key={index} />)}
                    </div>
                        <Cancelar>
                            <h6>Cancelar</h6>
                        </Cancelar>
                        <Salvar>
                            <h6>Salvar</h6>
                        </Salvar>
                </form>
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            </Mensagem>
    ) 

 }

 const Mensagem = styled.div`
left: 10px;
top:150px;
box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 74px;
    position: fixed;
width: 100%;
h2{
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