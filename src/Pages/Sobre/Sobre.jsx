import TituloPagina from "../../Componentes/TituloPagina";
import DescricaoPagina from "../../Componentes/DescricaoPagina";
import ImagemPagina from "../../Componentes/ImagemPagina";
import BotaoInicial from "../../Componentes/BotaoInicial";
import img from "../../Componentes/ImagemPagina/Celulares.png";

function Sobre(){
    return (
        <>
            <div id="alinhar" className="infoIniciais">
                <TituloPagina titulo="Bem-vindo à revolução dos vídeos!" />
                <DescricaoPagina descricao="Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores." /> 
                <BotaoInicial texto="Baixe o app" />
            </div> 
            <ImagemPagina src={img} descricao="Foto do App" />
        </>
    )
}
export default Sobre;