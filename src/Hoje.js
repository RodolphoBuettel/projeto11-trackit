import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import HabitsToday from "./HabitsToday";


export default function Hoje() {

    const imagem = JSON.parse(localStorage.getItem('img'));
    const [habitosHoje, setHabitosHoje] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'));

    let customParseFormat = require('dayjs/plugin/customParseFormat')
    dayjs.extend(customParseFormat);
    require('dayjs/locale/pt-br');
    let today = dayjs().locale('pt-br').format('dddd, DD/MM');
    let diaHoje = today[0].toUpperCase() + today.substring(1);

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        promise.then((res) => {
            setHabitosHoje(res.data);
            console.log(res.data);
        })

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }, []);

    return (

        <Container>
            <Header>
                <h2>TrackIt</h2>
                <div><img src={imagem} /></div>
            </Header>
            <Data>
                <h3>{diaHoje}</h3>
            </Data>
            <HabitosCriadosHoje>
                {habitosHoje.map((h, index)=> <HabitsToday h={h} key={index}/>)}
            </HabitosCriadosHoje>
            <Fotter>
                <div>
                    <Link to="/habitos"><h3>Hábitos</h3></Link>
                    <h3>Histórico</h3>
                </div>
            </Fotter>
            <Roda>
                <Curva>
                    {/* <img src={curva} /> */}
                    <h4>Hoje</h4>
                </Curva>
            </Roda>
        </Container>
    )
}

const Container = styled.div`
 display: flex;
height: 100%;
width: 100%;
padding-bottom: 100%;
background-color: #f2f2f2;
    justify-content: center;
    align-items: center;
`
const Header = styled.div`
       width: 100%;
height: 70px;
top: 0px;
position: fixed;
background: #126BA5;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
img{
    width: 51px;
height: 51px;
margin-right: 10px;
top: 9px;
border-radius: 98.5px;
}
h2{
    width: 97px;
height: 49px;
margin-left: 10px;
top: 10px;

font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;

color: #FFFFFF;
}
`
const Fotter = styled.div`
    position: fixed;
width: 100%;
height: 70px;
left: 0px;
bottom: 0px;
background: #ffffff;

    div{
        display: flex;
        justify-content: space-between;
        h3{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 18px;
            font-weight: 400;
            margin-top:20px;
            line-height: 22px;
            color: #52B6FF;   
        }
    }
`
const Roda = styled.div`
    z-index: 2;
    width: 91px;
    bottom: 10px;
height: 91px;
left:auto;
background-color: #52B6FF;
border-radius: 50%;
display: flex;
position: fixed;
align-items: center;
justify-content: center;
 h4{
    font-family: Lexend Deca;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
color: white;
 }

`
const Curva = styled.div`
margin-top:-30px; 
margin-right: 20px; 
    /* img{
        position: fixed;
        z-index: 3;
    } */
    h4{
        margin-top:28px;
    }
`
const Data = styled.div`
    position: fixed;
    top:100px;
    left:20px;
    h3{
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
/* identical to box height */


color: #126BA5;
    }
`
const HabitosCriadosHoje = styled.div`
`