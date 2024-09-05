import './IconeContato.css'

export default function IconeContato({icone}){
    return (
        <div className='icone'>    
              <img alt="imagem contato" src={icone.imagem} />                  
        </div>
        
        
    )
}