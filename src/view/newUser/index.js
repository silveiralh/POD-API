import React, { useState } from 'react';
import './newUser.css';

import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';

function NewUser() {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [carregando, setCarregando] = useState();
    const [msg, setMsg] = useState();
    

    return (
        <>
            <Navbar/>
            <div className="cadastro-content bg-light">
                <div className="form-cadastro">
                    <form className="form-login mx-auto text-center ">
                        <h2 className="text-center my-3 text-dark">Cadastro</h2>

                        <input onChange={(e) => setLogin(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" required autofocus></input>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" required></input>


                        {
                            carregando ? <div class="spinner-border mt-2 text-dark" role="status"><span class="sr-only">Loading...</span></div>
                                : 
                                // onclick para cadastrar
                                <button className="btn btn-lg btn-cadastrar btn-lg mt-2 my-2"type="button">Cadastrar</button>

                        }
                        <div className="text-muted text-center my-2">
                            {msgTipo === 'ok' && <spam><strong>Cadastrado com sucesso!</strong></spam>}
                            {msgTipo === 'erro' && <spam><strong>{msg}</strong></spam>}
                        </div>
                        <div className="text-center">
                            <Link to='/login' className="text-decoration-none link mx-3 mt-2 ">Já possuo um cadastro</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default NewUser;