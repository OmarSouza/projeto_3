import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import './SignUp.css';

function SignUp() {
    return (
		<div className="componentSignUp">
            {/* Criação do Container de Logo do Aplicativo */}
			<div className="containerLogoSignUp">
				<img src={Logo} className='logoSignUp'/>
			</div>

            {/* Criação de Container para entrada de Dados */}
			<div className="containerInfoSignUp">
                {/* Criação de Form para entrada de Texto */}
				<form className="formSignUp">
					<label for="inputNome">Nome Completo:</label>
	                <input type="text" id="inputNome" autocomplete="off"/>

    	            <label for="inputUsuario">Usuario:</label>
        	        <input type="text" id="inputUsuario" autocomplete="off"/>

            	    <label for="inputSenha">Tipo de Alimentação:</label>
                	<select name="tipoAlimentacao" id="alimentacao" class="selectFormSignUp">
                    	<option value="">Selecione</option>
                    	<option value="Vegetariano">Vegetariano</option>
                    	<option value="Vegano">Vegano</option>
                    	<option value="Ovolactovegetariano">Ovolactovegetariano</option>
                	</select>

                	<label for="inputSenha">Senha:</label>
                	<input type="password" id="inputSenha" autocomplete="off"/>

                    {/* Criação de Container de Botões */}
					<div class="containerBotaoSignUp">
                		<Link to='/' className="botaoSignUp primarioSignUp linkSignUp">
							Cadastrar
						</Link>

						<Link to='/' className="botaoSignUp quartenarioSignUp linkSignUp">
							Cancelar
						</Link>
            		</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp;