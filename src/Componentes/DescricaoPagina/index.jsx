import './DescricaoPagina.css';

function DescricaoPagina({ descricao }){
    return (
        <>
            <div className="descricao">
                <p>{descricao}</p>
            </div>
        </>
    )
}
export default DescricaoPagina;