import './Card.css'

function Card({card}){
    return (
        <div className='card' style={{backgroundColor: card.cor}}>            
            <div className='cabecalho'>
                <h1>{card.id}</h1>
                <div className='caixa-img'><img alt={card.id} src={card.imagem}></img></div>
            </div>
            <div className='conteudo'>                
                <h3>{card.titulo}</h3>
                <p>{card.texto}</p>            
            </div>                  
        </div>
        
        
    )
}
export default Card