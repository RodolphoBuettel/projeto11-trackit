import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "./contextApi";


export default function DiasDosHabitos({ d, i }) {

    const { dias, setDias } = useContext(UserContext);
    const [selecionado, setSelecionado] = useState("#FFFFFF");


    function EscolheDia(i) {
        if (selecionado === "#FFFFFF") {
            setDias([...dias, i]);
            setSelecionado("gray");
        }else{
            setSelecionado("#FFFFFF");
        }
    }

    return (

        <Days onClick={() => EscolheDia(i)} selecionado={selecionado} ><h5>{d}</h5></Days>

    )
}

const Days = styled.button`
    width: 30px;
height: 30px;
box-sizing: border-box;
background: ${props => props.selecionado};
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
align-items: center;
justify-content:center;
margin-right: 5px;
    h5{
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */
color: #DBDBDB;
    }
`