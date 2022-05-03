import React, { Component } from "react";
import './Restaurante.css';
import { Link } from "react-router-dom";
//Importação de Icones da biblioteca React-Icons
import { FiCornerDownLeft, FiPlusCircle } from 'react-icons/fi'

class Restaurante extends Component {
    render() {
        return (
            <div className="componentRestaurante">
                {/* Criação de Container para Titulo e Botões */}
                <div className="containerHeaderRestaurante">
                    <label>Restaurante</label>
    
                    {/* Criação de Container para Botões */}
                    <div className="containerBotaoHeader">
                        <Link to='/novoRest'>
                            <FiPlusCircle className="botaoHeader"/>
                        </Link>
    
                        <Link to='/home'>
                            <FiCornerDownLeft className="botaoHeader"/>
                        </Link>
                    </div>
                </div>
    
                {/* Criação de Container para Card de Restaurantes */}
                <div class="containerCardRestaurante">
                    <Link to='/visRest' className="botaoCardRestaurante">
                        <div class="cardRestaurante">
                            <div class="tituloCardRestaurante">
                                <label>Restaurante A</label>
                            </div>
                            
                            <div class="infoCardRestaurante">
                                <label for="ruaCard">Rua A, 123</label>
                                <label for="cidadeCard">Cidade A</label>
                            </div>
                        </div>
                    </Link>
                </div>
    
            </div>
        );
    }
}

export default Restaurante;