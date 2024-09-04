import TituloPagina from "../../Componentes/TituloPagina";
import DescricaoPagina from "../../Componentes/DescricaoPagina";
import Card from "../../Componentes/Card";

import ImagemPagina from "../../Componentes/ImagemPagina";
import img from "../../Componentes/ImagemPagina/Hero1.png";
import BotaoInicial from "../../Componentes/BotaoInicial";

function HomePage() {
  const detalhes = [
    {
      id: "01",
      titulo: "Youtube",
      texto:
        "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
      cor: "#F1C2B0",
    },
    {
      id: "02",
      titulo: "Tiktok",
      texto:
        "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
      cor: "#F9EB98",
    },
    {
      id: "03",
      titulo: "Facebook",
      texto:
        "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
      cor: "#C0D9DD",
    },
    {
      id: "04",
      titulo: "Instagram",
      texto:
        "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
      cor: "#6975E8",
    },
  ];

  return (
    <>
      <div id="alinhar" className="infoIniciais">
        <TituloPagina titulo="Crie seus vídeos online" />
        <DescricaoPagina descricao="Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade." /> 
        <BotaoInicial texto="Começar Agora!" />
      </div> 
      <ImagemPagina src={img} descricao="Hero Imagem" />
      <div className="cardsRedes">
        {detalhes.map((card, indice) => {
          return <Card key={indice} card={card} />;
        })}
      </div>
    </>
  );

}
export default HomePage;
