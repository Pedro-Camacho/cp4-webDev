import './TituloPagina.css';

function TituloPagina({ titulo }){
    return (
        <>
            <div className="titulo">
                <h1>{titulo}</h1>
            </div>
        </>
    )
}
export default TituloPagina;