import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {

  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [img, setImg] = useState("");
  const [token, setToken] = useState("");
  const [display, setDisplay] = useState("none");
  const [dias, setDias] = useState("");
  const [mostraMensagem, setMostraMensagem] = useState("");
  const [habitosHoje, setHabitosHoje] = useState([]);

  return (
    <UserContext.Provider value={{ url, setUrl, email, setEmail, senha, setSenha, img, setImg, token, setToken,
    setDisplay, display, dias, setDias, mostraMensagem, setMostraMensagem, habitosHoje, setHabitosHoje}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

export { UserProvider };