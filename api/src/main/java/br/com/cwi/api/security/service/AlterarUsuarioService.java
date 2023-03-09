package br.com.cwi.api.security.service;

import br.com.cwi.api.security.controller.request.AlterarUsuarioRequest;
import br.com.cwi.api.security.controller.request.UsuarioRequest;
import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.mapper.AlterarUsuarioMapper;
import br.com.cwi.api.security.mapper.UsuarioMapper;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class AlterarUsuarioService {

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private UsuarioRepository usuarioRepository;


    public void alterar(AlterarUsuarioRequest request) {

        Usuario usuario = usuarioAutenticadoService.get();

        usuario = AlterarUsuarioMapper.toEntity(request, usuario);

        usuario.setAtualizadoEm(LocalDate.now());

        usuarioRepository.save(usuario);
    }
}
