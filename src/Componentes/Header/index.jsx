import './Header.css';
import Botao from "../Botao";

function Header (){
    return (
        <div className="cabecalhoHeader">
            <Botao texto={'Home'} path={'/HomePage'}/>
            <Botao texto={'Sobre'} path={'/Sobre'}/>
            <Botao texto={'Contato'} path={'/Contato'}/>
        </div>   
    )
}
export default Header;