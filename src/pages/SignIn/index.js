import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import './SignIn.css';


class SignIn extends Component {
    render() {
		return (
			<div className="componentSignIn">
				{/* Criação do Container de Logo do Aplicativo */}
				<div className="containerLogoSignIn">
					<img src={Logo} className='logoSignIn'/>
				</div>
	
				{/* Criação de Container para entrada de Dados */}
				<div class="containerInfoSignIn">
					{/* Criação de Form para entrada de Texto */}
					<form className="formSignIn">
						<label for="inputUsuario">Usuario:</label>
						<input type="text" id="inputUsuario" autocomplete="off"/>
	
						<label for="inputSenha">Senha:</label>
						<input type="password" id="inputSenha" autocomplete="off"/>
	
						{/* Criação de Container de Botões */}
						<div class="containerBotaoSignIn">
							<Link to='./home' className="botaoSignIn linkSignIn primarioSignIn" id="btnCadastrar">
								Acessar
							</Link>
	
							<Link to='./register' className="botaoSignIn linkSignIn" id="btnCadastrar">
								Cadastrar
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SignIn;