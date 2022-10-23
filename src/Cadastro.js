import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import sombra from "./images/sombra.png";
import coluna1 from "./images/coluna1.png";
import coluna2 from "./images/coluna2.png";
import coluna3 from "./images/coluna3.png";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "./contextApi";

export default function Cadastro() {

    const navigate = useNavigate();

    // const {setUrl, url, setSenha, senha, setEmail, email} = useContext(UserContext); 


    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [url, setUrl] = useState("");
    const [nome, setNome] = useState("");
    const [disabled, setDisabled] = useState(false);

    function Cadastrar(e) {
        e.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

        const usuario = {
            email: email,
            name: nome,
            image: url,
            password: senha
        }

        console.log(usuario);
        const promisse = axios.post(URL, usuario);

        promisse.then((res) => {
            console.log(res.data);
            if (res === undefined) {
                return (console.log("indo"));
            } else {
                navigate("/");
            }

        })

        promisse.catch((err) => alert(err.response.data));
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
            <Form onSubmit={Cadastrar}>
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
                <div>
                    <input
                        id="nome"
                        type="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="nome"
                        required />
                </div>
                <div>
                    <input
                        id="url"
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="foto"
                        required />
                </div>
                <Button type="submit" disabled={disabled}>Cadastrar</Button>
            </Form>
            <Login><Link to="/"><h3>Já tem uma conta? Faça login!</h3></Link></Login>
        </>
    )
}

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
const Login = styled.div`
        width: 232px;
height: 17px;
margin-top: 15px;
display: flex;
justify-content: center;
flex-wrap: wrap;
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