import React, { useState } from 'react';
import './login.css';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';



function Login() {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [carregando, setCarregando] = useState();

    return (
        <><Navbar/>
        <div className="login-content d-flex align-items-center text-center bg-light">
            <form className="form-signin mx-auto ">
                <h2 className="text-center my-3 text-dark">Login</h2>

                <input onChange={(e) => setLogin(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" required autofocus></input>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" required></input>

                {
                    carregando ? <div class="spinner-border mt-2 text-dark" role="status"><span class="sr-only">Loading...</span></div> : 
                        // onclick para logar e autenticar 
                        <button className="btn btn-lg btn-login btn-block my-3" type="button">Entrar</button>
                }

                <div className="text-muted text-center my-2">
                    {msgTipo === 'ok' && <spam><strong>Conectado com sucesso!</strong></spam>}
                    {msgTipo === 'erro' && <spam><strong>Verifique o login e senha!</strong></spam>}

                </div>
                <div>
                    <Link to='newuser' className="link mt-2 mx-3 text-decoration-none">Cadastrar</Link>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login;