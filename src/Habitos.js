import { useContext, useState } from "react";
import styled from "styled-components"
import UserContext from "./contextApi";
import curva from "./images/curva.png";
import ListaDeHabitos from "./ListaDeHabitos";

export default function Habitos() {

    const [habits, setHabits] = useState("");
    const { img, token } = useContext(UserContext);
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [display, setDisplay] = useState("none");

    function AdicionarHabito() {
        setDisplay("");
    }

    return (
        <Container>
            <Header>
                <h2>TrackIt</h2>
                <div><img src={img} /></div>
            </Header>
            <Adicionar>
                <h1>Meus hábitos</h1>
                <Button onClick={AdicionarHabito}>+</Button>
            </Adicionar>
            <Mensagem display={display}>
                <form>
                    <input id="habits"
                        type="text"
                        value={habits}
                        onChange={(e) => setHabits(e.target.value)}
                        placeholder="nome do habito"
                        required />
                    <div>
                        {days.map((d, index) => <ListaDeHabitos d={d} key={index} />)}
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
            <Fotter>
                <div>
                    <h3>Hábitos</h3>
                    <h3>Histórico</h3>
                </div>
            </Fotter>
            <Roda>
                <Curva>
                    <img src={curva} />
                    <h4>Hoje</h4>
                </Curva>
            </Roda>
        </Container>
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
const Button = styled.button`
 width: 40px;
height: 35px;
margin-right: 15px;
border: none;
background: #52B6FF;
border-radius: 4.63636px;
color:white;
`
const Adicionar = styled.div`
top:100px;
width: 100%;
left: 10px;
position: fixed;
    display:flex;
    justify-content: space-between;
    h1{
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;

    }
`
const Header = styled.div`
    width: 100%;
height: 70px;
margin-top: -930px;
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
const Container = styled.div`
display: flex;
height: 1000px;
width: 100%;
background-color: #f2f2f2;
    justify-content: center;
    align-items: center;
`
const Curva = styled.div`
margin-top:-30px; 
margin-right: 20px; 
    img{
        position: fixed;
        z-index: 3;
    }
    h4{
        margin-top:28px;
    }
`