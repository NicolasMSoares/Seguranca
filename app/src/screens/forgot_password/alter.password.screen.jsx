import { useNavigate } from "react-router-dom";
import { alterPassword } from "../../api/forgot_password/alterPassword";
import { useState } from "react";

export function AlterPasswordScreen() {
  const [formInput, setFormInput] = useState({ email: "", tokenRecuperarSenha: '', senha: ''});
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await alterPassword({
        email: formInput.email,
        tokenRecuperarSenha: formInput.tokenRecuperarSenha,
        senha: formInput.senha
      });
      navigate("/");
      
    } catch (error) {
      setError("Erro em algum campo");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="formLogin">
            
        <div className="boxInput">        

            <input 
            type="text" 
            name="email" 
            autoComplete="off" 
            value={formInput.email} 
            onChange={handleChange} 
            placeholder="Informe seu email" 
            />

            <input 
            type="text" 
            name="tokenRecuperarSenha" 
            autoComplete="off" 
            value={formInput.tokenRecuperarSenha} 
            onChange={handleChange} 
            placeholder="Informe seu token" 
            />

            <input 
            type="text" 
            name="senha" 
            autoComplete="off" 
            value={formInput.senha} 
            onChange={handleChange} 
            placeholder="Informe sua nova senha" 
            />

            {error && <p>{error}</p>}            
            <button type="submit">Enviar</button>          
        </div>
      </form>
  );
}
