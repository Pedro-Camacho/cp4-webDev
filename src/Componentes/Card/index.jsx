import './Card.css'

function Card({card}){
    return (
        <div className='card' style={{backgroundColor: card.cor}}>            
            <h1>{card.id}</h1>
            <img alt={card.id}></img>                        
            <h3>{card.titulo}</h3>
            <p>{card.texto}</p>            
        </div>
        
        
    )
}
export default Card