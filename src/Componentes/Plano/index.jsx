import './Plano.css'

function Plano(){
    return (
        <div className='planos'>
            <div className='individual'>
                <header>
                    <h3>Indivudual</h3>
                </header>
                <section>
                    <label htmlFor="n-videos">1 Usuário</label>
                    <select name="n-videos" id="numero-videos">
                        <option value="dez-videos">10 Vídeos <p className='negrito'>R$15</p></option>
                    </select>                    
                </section>
                <footer>
                        <button className='botao-cadastrar'>
                            Cadastrar
                        </button>
                </footer>
            </div>
            <div className='individual'>
                <header>
                    <h3>Indivudual</h3>
                </header>
                <section>
                    <label htmlFor="n-videos">1 Usuário</label>
                    <select name="n-videos" id="numero-videos">
                        <option value="dez-videos">10 Vídeos <p className='negrito'>R$15</p></option>
                    </select>                    
                </section>
                <footer>
                        <button className='botao-cadastrar'>
                            Cadastrar
                        </button>
                </footer>
            </div>
            <div className='individual'>
                <header>
                    <h3>Indivudual</h3>
                </header>
                <section>
                    <label htmlFor="n-videos">1 Usuário</label>
                    <select name="n-videos" id="numero-videos">
                        <option value="dez-videos">10 Vídeos <p className='negrito'>R$15</p></option>
                    </select>                    
                </section>
                <footer>
                        <button className='botao-cadastrar'>
                            Cadastrar
                        </button>
                </footer>
            </div>
        </div>
    )
}
export default Plano