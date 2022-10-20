import styled from "styled-components";


export default function ListaDeHabitos({d}){

    return(
        
            <Days><h5>{d}</h5></Days>
        
    )
}

const Days = styled.div`
    width: 30px;
height: 30px;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
align-items: center;
justify-content:center;
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