import './Plano.css'

function Plano({planos}){
    return (
        <>
        {
            planos.map(({display1, display2, nomePlano, qtdUsuarios1, qtdVideos1, preco1, qtdUsuarios2, qtdVideos2, preco2, img, cor}, indice) =>(    
                <div className='planos' key={indice}>
                    <div className='plano' >
                        <header style={{backgroundColor: cor}}>
                            <h3>{nomePlano}</h3>
                        </header>
                        <section>
                            <label htmlFor="n-videos">{qtdUsuarios1}</label>
                            <select style={{display: display1}}  name="n-videos" id="numero-videos">
                                <option value="qtdVideos">{qtdVideos1} <p className='negrito'>{preco1}</p></option>
                            </select>  
                            <label htmlFor="n-videos">{qtdUsuarios2}</label>
                            <select  style={{display: display2}} name="n-videos" id="numero-videos">
                                <option value="qtdVideos">{qtdVideos2}<p className='negrito'>{preco2}</p></option>
                            </select>   
                            <section style={{display: img}}>
                                <img className="foto-mobile" src={img}/>  
                            </section>               
                        </section>
                        <footer>
                                <button className='botao-cadastrar'>
                                    Cadastrar
                                </button>
                        </footer>
                    </div>
                </div>
            ))
        }
        </>
    )
}
export default Plano