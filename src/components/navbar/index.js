import React, { useState } from 'react';
import * as Ri from "react-icons/ri";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";
import { Link } from 'react-router-dom';
import './navbar.css';


// - Criação dos próprios componente
function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    // arrow function para o alternar entre menu ativo e não ativo
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    {/* //toggle do sidebar usando useState */}
                    <Fa.FaBars   onClick={showSidebar} />
                </Link>
            </div>

            {/* //condicional para alternar entre o X e o menu sideBar */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                {/* toggle do sidebar usando useState */}
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <Ai.AiOutlineClose />
                        </Link>
                    </li>
                    {/* listar se logado como administrador */}
                    <li className='nav-text'>
                        <Link to='/registerImage' className='menu-bars'>
                            <Ai.AiOutlineOrderedList />
                            <span>Cadastrar</span>
                        </Link>
                    </li>
                    {/* listar se logado */}
                    <li className='nav-text'>
                        <Link to='/search' className='menu-bars'>
                            <Bs.BsFillPersonLinesFill />
                            <span>Buscar</span>
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='/newuser' className='menu-bars'>
                            <Ri.RiUserAddFill />
                            <span>Novo User</span>
                        </Link>
                    </li>
                    <li className='nav-text'>
                        {/* falta onclick para dispachar a saida */}
                        <Link className='menu-bars login'>
                            <Ri.RiLogoutBoxRFill />
                            <span>Sair</span>
                        </Link>
                    </li>
                    {/* verificar se esta logado ou nao  */}
                    <>
                        <li className='nav-text'>
                            <Link to='/login' className='menu-bars'>
                                <Ri.RiLoginBoxFill />
                                <span>Login</span>
                            </Link>
                        </li>
                    </>
                </ul>
            </nav>
        </>

    )
}

export default Navbar
