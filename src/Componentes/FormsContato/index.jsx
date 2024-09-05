import './FormsContato.css'

export default function FormsContato(){
    return (
        <>
            <form className='formsContato'>
                <div className='dados'>
                    <p>Nome: </p> 
                    <input type="text" />
                </div>
                <div className="dados">
                    <p>E-mail: </p> 
                    <input type="email"id="email" />
                </div>
                <div id="mensagem">
                    <p>Mensagem: </p> 
                    <textarea type="text"/>
                </div>
                <input id="btnEnviar" type="submit" value="Enviar" />
            </form>
        </>
    )
}
