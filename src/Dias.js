
import { useState } from "react";
import styled from "styled-components";

export default function Dias({ d, i, diasDoHabito }) {
    
    const [selecionado, setSelecionado] = useState("");

    return (
        <D selecionado={selecionado}>
            <h5>{d}</h5>
        </D>
    )
}

const D = styled.button`
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
margin-left: 5px;
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