package br.com.cwi.api.security.mapper;

import br.com.cwi.api.security.controller.request.AlterarUsuarioRequest;
import br.com.cwi.api.security.controller.request.UsuarioRequest;
import br.com.cwi.api.security.domain.Usuario;

public class AlterarUsuarioMapper {

    public static Usuario toEntity(AlterarUsuarioRequest request, Usuario usuario) {
        usuario.setNome(request.getNome());
        usuario.setTelefone(request.getTelefone());
        usuario.setFoto(request.getFoto());
        return usuario;
    }
}
