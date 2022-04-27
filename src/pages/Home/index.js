import React from "react";
import { Link } from 'react-router-dom';
//Utilização da Biblioteca de Icones do React-Icons
import { FiCornerDownLeft } from 'react-icons/fi';
import { BiFoodMenu, BiHomeAlt } from 'react-icons/bi';
import Logo from '../../assets/logo.png';
import './Home.css';

function Home() {
    return (
        <div className="componentHome">
            {/* Criação do Container Header para Logo e Botão*/}
            <div className="containerHeaderHome">
                {/* Criação de Container Logo */}
                <div className="logoHome">
                    <img src={Logo} alt='Logo Luna Vegan'/>
                </div>

                {/* Criação de Container Botão de Retorno */}
                <div className="campoRetorno">
                    <Link to='/' className="botaoRetorno">
                        <FiCornerDownLeft/>
                    </Link>
                </div>
            </div>

            {/* Criação de Container com Informações Principais */}
            <div className="containerInfoHome">
                <Link to='/restaurante' className="botaoHome">
                    <BiHomeAlt className="botaoHomeIcon"/>
                    Restaurante
                </Link>
                <Link to='/receita' className="botaoHome">
                    <BiFoodMenu className="botaoHomeIcon"/>
                    Receita
                </Link>
            </div>
        </div>
    );
}

export default Home;