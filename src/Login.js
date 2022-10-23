import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import sombra from "./images/sombra.png";
import coluna1 from "./images/coluna1.png";
import coluna2 from "./images/coluna2.png";
import coluna3 from "./images/coluna3.png";
import axios from "axios";
import { useContext, useState } from "react";
import { Audio } from 'react-loader-spinner'
import UserContext from "./contextApi";

export default function Login() {

    const navigate = useNavigate();
    const [load, setLoad] = useState(undefined);
    const [loading, setLoading] = useState("Entrar");

    const { email, setEmail, senha, setSenha, setImg, img, setToken } = useContext(UserContext);

    const recebe = load;

    function Logar(e) {
        e.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const user = {
            email: email,
            password: senha,
        }

        console.log(user);
        const promisse = axios.post(URL, user);

        promisse.then((res) => {
            console.log(res.data);
            // setToken(res.data.token);
            localStorage.setItem('token', JSON.stringify(res.data.token));
            localStorage.setItem('img', JSON.stringify(res.data.image));
            navigate("/habitos");
        })

        promisse.catch((err) =>
            alert(err.response.data.message));
    }



    return (
        <>
            <Logo>
                <Col1 src={coluna1} />
                <Col2 src={coluna2} />
                <Col3 src={coluna3} />
                <Seta><img src={logo} /></Seta>
                <img src={sombra} />
                <h1>TrackIt</h1>
            </Logo>
            <Form onSubmit={Logar}>
                <div>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        required />
                </div>
                <div>
                    <input
                        id="password"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="senha"
                        required />
                </div>
                <Button type="submit">{loading}</Button>
            </Form>
            <Cadastre_se>
                <Link to="/cadastro"><h3>Não tem uma conta? Cadastre-se!</h3></Link>
            </Cadastre_se>
        </>

    )
}


const Logo = styled.div`
    height: 178.38323974609375px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    font-family: 'Playball', cursive;
font-size: 69px;
font-weight: 400;
line-height: 86px;
letter-spacing: 0em;
text-align: center;
margin-top: -10px;
color: #126BA5;

}
img{
margin-top: 106.8023681640625px;
border-radius: 0px;
}
`
const Seta = styled.div`
    margin-bottom: -120px;
    z-index: 2;
`
const Col1 = styled.img`
    margin-bottom: -140px;
    margin-left: -55px;
`
const Col2 = styled.img`
    margin-bottom: -160px;
    margin-left: -13px;
`
const Col3 = styled.img`
    margin-bottom: -130px;
    margin-left: 30px;
`
const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 50px;
   input{
    height: 45px;
width: 303px;
border-radius: 5px;
margin-bottom: 5px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
   }
`
const Button = styled.button`
width: 303px;
height: 45px;
left: 36px;
top: 381px;
border: none;
background: #52B6FF;
border-radius: 4.63636px;
color:white;
`
const Cadastre_se = styled.div`
    width: 100%;
height: 17px;
margin-top: 15px;
display: flex;
flex-wrap: wrap;
justify-content: center;
h3{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;
}

`