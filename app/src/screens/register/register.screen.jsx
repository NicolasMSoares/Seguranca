import { useNavigate } from "react-router-dom";
import { useGlobalUser } from "../../context/user/useGlobalUser"; 
import { register } from "../../api/register/register";
import { useState } from "react";



export function RegisterScreen() {

    const [ formInput, setFormInput ] = useState({ nome: '', telefone: '', email: '', senha: '', foto: '', permissoes: ['USER']});
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const [ user, setUser ] = useGlobalUser();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormInput(oldFormInput => ({ ...oldFormInput, [name]: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          const user = await register({
            nome: formInput.nome,
            telefone: formInput.telefone,
            email: formInput.email,
            senha: formInput.senha,
            foto: formInput.foto,
            permissoes: formInput.permissoes
        });
        navigate("/")
        
          setUser(user);
          console.log(user)
        } catch (error) {
          setError("Erro ao informar algum campo");
        }
      }
      

    return (
      <form onSubmit={handleSubmit} className="formLogin">
            
        <div className="boxInput">        

            <input 
            type="text" 
            name="nome" 
            autoComplete="off" 
            value={formInput.nome} 
            onChange={handleChange} 
            placeholder="Informe seu nome" 
            />

            <input 
            type="text" 
            name="telefone" 
            autoComplete="off"
            value={formInput.telefone}
            onChange={handleChange} 
            placeholder="Informe seu telefone" 
            />

            <input 
            type="text" 
            name="email" 
            autoComplete="off"
            value={formInput.email}
            onChange={handleChange} 
            placeholder="Informe seu email" 
            />

            <input 
            type="password" 
            name="senha" 
            autoComplete="off"
            value={formInput.senha}
            onChange={handleChange} 
            placeholder="Informe uma senha" 
            />

            <input 
            type="text" 
            name="foto" 
            autoComplete="off"
            value={formInput.foto}
            onChange={handleChange} 
            placeholder="Informe uma foto" 
            />
           
            {error && <p>{error}</p>}            
            <button type="submit">Criar</button>
        </div>
      </form>
    );
}