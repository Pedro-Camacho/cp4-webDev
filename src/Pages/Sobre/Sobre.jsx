import TituloPagina from "../../Componentes/TituloPagina";
import DescricaoPagina from "../../Componentes/DescricaoPagina";
import ImagemPagina from "../../Componentes/ImagemPagina";
import BotaoInicial from "../../Componentes/BotaoInicial";
import img from "../../Componentes/ImagemPagina/Celulares.png";

import './Sobre.css';

import Planos from "../../Componentes/Planos";

function Sobre(){
    return (
        <>
            <section className="container-principal">
                <div  className="infoIniciais">
                    <TituloPagina titulo="Bem-vindo à revolução dos vídeos!" />
                    <DescricaoPagina descricao="Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores." /> 
                    <BotaoInicial texto="Baixe o app" />
                </div> 
                <ImagemPagina src={img} descricao="Foto do App" />
            </section>        
            <section>
                <Planos/>
            </section>
        </>
    )
}
export default Sobre;