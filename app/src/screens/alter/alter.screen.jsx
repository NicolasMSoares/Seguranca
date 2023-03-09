import { useNavigate } from "react-router-dom";
import { useGlobalUser } from "../../context/user/useGlobalUser"; 
import { alter } from "../../api/alter/alter";
import { useState } from "react";



export function AlterScreen() {

    const [ formInput, setFormInput ] = useState({ nome: '', telefone: '', foto: ''});
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
          const user = await alter({
            nome: formInput.nome,
            telefone: formInput.telefone,            
            foto: formInput.foto
        });
        navigate("/home")
        
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
            name="foto" 
            autoComplete="off"
            value={formInput.foto}
            onChange={handleChange} 
            placeholder="Informe uma foto" 
            />
           
            {error && <p>{error}</p>}            
            <button type="submit">Alterar</button>
        </div>
      </form>
    );
}