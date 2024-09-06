import TituloPagina from "../../Componentes/TituloPagina";
import DescricaoPagina from "../../Componentes/DescricaoPagina";
import ImagemPagina from "../../Componentes/ImagemPagina";
import BotaoInicial from "../../Componentes/BotaoInicial";
import img from "../../Componentes/ImagemPagina/Celulares.png";
import imgPlanoCorporativo from "../../imagens/mobile.png";

import Plano from "../../Componentes/Plano";

function Sobre(){
    const planos =[
        {
            nomePlano: "Individual",
            qtdUsuarios1: "1 Usuário",
            qtdVideos1: "10 Vídeos",
            display2: "none",
            preco1: "R$15",
            cor: "#6975E8",
            img: "none"
        },
        {
            nomePlano: "Profissional - Times",
            qtdUsuarios1: "1-10 Usuários",
            qtdVideos1: "Vídeos Ilimitados",
            preco1: "R$40",
            qtdUsuarios2: "+10 Usuários",
            qtdVideos2: "Vídeos Ilimitados",
            preco2: "R$20",
            img: "none"
        },
        {
            nomePlano: "Corporativo",
            img: imgPlanoCorporativo,
            display1: "none",
            display2: "none"
        }
    ];
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
            <section className="container-planos">
                <h3>Planos</h3>
                <div className="planos">
                    <Plano planos={planos} />
                </div>
            </section>
        </>
    )
}
export default Sobre;