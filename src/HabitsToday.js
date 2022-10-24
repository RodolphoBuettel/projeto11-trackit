import axios from "axios";
import { useState } from "react"
import styled from "styled-components"
import check from "./images/check.png"

export default function HabitsToday({ h }) {

    // const [feito, setFeito] = useState(false);
    const [checkMark, setCheckMark] = useState(h.done);
    const token = JSON.parse(localStorage.getItem('token'));

    function MarcarHabito() {
       setCheckMark(!checkMark);

       if(checkMark === false){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`;


        const promisse = axios.post(URL, [],
            {
                headers:
                    { 'Authorization': `Bearer ${token}` }
            });
            promisse.then((res) => {
                console.log(res);
                window.location.reload(true);
            });
            promisse.catch((erro) => {
                console.log(erro.response.data);
            })

       }
       else{
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`;


        const promisse = axios.post(URL, [],
            {
                headers:
                    { 'Authorization': `Bearer ${token}` }
            });
            promisse.then((res) => {
                console.log(res);
                window.location.reload(true);
            });
            promisse.catch((erro) => {
                console.log(erro.response.data);
            })

       }

    }


    return (

        <HabitHoje>
            <h2>{h.name}</h2>
            <Sequencia>
                <h3>Sequência atual: {h.currentSequence}</h3>
                <h3>Seu recorde: {h.highestSequence}</h3>
            </Sequencia>
            <Check onClick={MarcarHabito} checkMark={checkMark}>
                <div><img src={check}/></div>
            </Check>
        </HabitHoje>
    )
}

const HabitHoje = styled.div`
    width: 340px;
height: 94px;
left: 17px;
top: 177px;
margin-bottom: 20px;
background: #FFFFFF;
border-radius: 5px;
h2{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */
margin-left: 15px;
padding-top: 10px;

color: #666666;
}
`
const Sequencia = styled.div`
    margin-left: 15px;
    padding-top: 10px;
    h3{
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;

color: #666666;
    }
`
const Check = styled.div`
    width: 69px;
height: 69px;
margin-left: 250px;
margin-top: -150px;
border-radius: 5px;
background-color:${props=>props.checkMark ? "green" : "#ebebeb" };
div{
    display: flex;
    justify-content: center;
    margin-top: 85px;
    align-items: center;
    img{
        margin-top: 20px;
    }
}

`