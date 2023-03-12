import { useNavigate } from "react-router-dom";
import { password } from "../../api/forgot_password/password";
import { useState } from "react";

export function ForgotPasswordScreen() {
  const [formInput, setFormInput] = useState({ email: ''});
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await password({
       email: formInput.email
    });
      navigate("/alter_password");
      
    } catch (error) {
      setError("Email inválido");
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

            {error && <p>{error}</p>}            
            <button type="submit">Enviar</button>          
        </div>
      </form>
  );
}
