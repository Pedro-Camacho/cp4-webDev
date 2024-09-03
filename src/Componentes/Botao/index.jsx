import './Botao.css';
import {Link} from "react-router-dom"

const linkStyle = {
    textDecoration: "none",
    
};

function Botao({texto, path}){
    return (
        <Link to={path} >
            <button className="botoes">{texto}</button>
        </Link>
    
    )
}
export default Botao;