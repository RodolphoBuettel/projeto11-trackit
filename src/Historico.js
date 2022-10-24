import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Historico(){

    const imagem = JSON.parse(localStorage.getItem('img'));


    return (

        <Container>
            <Header>
                <h2>TrackIt</h2>
                <div><img src={imagem} /></div>
            </Header>
            <Aviso>
                <h2>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </h2>
            </Aviso>
            <Fotter>
                <div>
                    <Link to="/habitos"><h3>Hábitos</h3></Link>
                    <Link to="/historico"><h3>Histórico</h3></Link>
                </div>
            </Fotter>
            <Roda>
                <Curva>
                    {/* <img src={curva} /> */}
                    <Link to="/hoje"><h4>Hoje</h4></Link>
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
const Aviso = styled.div`
    margin-top: 150px;
    padding-bottom: 100%;
h2{
    
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;
}
`