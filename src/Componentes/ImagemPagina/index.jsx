import './ImagemPagina.css';

function ImagemPagina({ src, descricao }){
    return (
        <>
            <img id="alinhar" className="imagemPagina" src={src} alt={descricao} />
        
        </>
    )
}
export default ImagemPagina;