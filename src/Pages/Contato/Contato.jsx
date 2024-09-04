import TituloPagina from "../../Componentes/TituloPagina";

function Contato(){
    return(
        <> 
            <div id="alinhar" className="infoIniciais">
                <TituloPagina titulo="Dúvida e suporte, entre em contato:" />    
            </div>
            <form>
                <input type="text" placeholder="OLa Contato" />
            </form>
           
        </>
        
    )
}
export default Contato;