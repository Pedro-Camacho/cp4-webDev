import TituloPagina from "../../Componentes/TituloPagina";
import IconeContato from "../../Componentes/IconeContato";
import FormsContato from "../../Componentes/FormsContato";

import twitter from '../../imagens/twitterContato.png'
import instagram from '../../imagens/instagramContato.png'
import discord from '../../imagens/discordContato.png'

import "../../Componentes/IconeContato/IconeContato.css";

function Contato(){
    const icones = [
        {
            imagem: twitter
        },
        {
            imagem: instagram
        },
        {
            imagem: discord
        }
    ];
    return(
        <> 
            <div className="containerContato">
                <div id="alinhar" className="infoIniciais" id="ContatosE">
                    <TituloPagina titulo="Dúvida e suporte, entre em contato:" />    
                    <section className="iconesContato">
                        {icones.map((icone) => {
                            return (<IconeContato icone={icone}/>)
                        })}
                    </section>
                </div>
                <FormsContato />
            </div>
           
        </>
        
    )
}
export default Contato;