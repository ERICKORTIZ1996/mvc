import AppContext from "./AppContext";
import React ,{useState , useContext} from "react";
const Contexto=()=>{
    const contexto=useContext(AppContext);
    const [loggintxt, setLoggintxt] = useState();
    const logginHandler = (e) => {
       if(contexto.loggin){
        contexto.setLoggin(false);
           setLoggintxt('Log in');
    }else{
        contexto.setLoggin(true);
        setLoggintxt('Log out');
    }
    }
    return (
        <div>
            <h1>Componente Hijo</h1>
            <p>Estas actualemnte : {contexto.loggin}</p>
            <button onClick={logginHandler}>{loggintxt}</button>
        </div>
    )
    
}
export default Contexto;