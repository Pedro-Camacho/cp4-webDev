import './Card.css'

function Card({dados}){
    return (
        <>
        {
            dados.map(({id, titulo, texto, cor, imagem}, indice) =>(
                <div className="card" key={indice} style={{backgroundColor: cor}}>
                    <div className="cabecalho">
                        <h1>{id}</h1>
                        <div className="caixa-img"><img alt={id} src={imagem} /></div>
                    </div>
                    <div className="conteudo">
                        <h3>{titulo}</h3>
                        <p>{texto}</p>
                    </div>
                </div>
            ))
        }
        </>
        
        
    )
}
export default Card