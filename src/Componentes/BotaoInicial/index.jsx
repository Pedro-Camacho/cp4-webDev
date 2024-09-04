import './BotaoInicial.css';

function BotaoInicial({ texto }){
    return (
        <>
            <div className="BotaoInicial">
                <button>{texto}</button>
            </div>
        </>
    )
}
export default BotaoInicial;