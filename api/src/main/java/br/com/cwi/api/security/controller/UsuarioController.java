package br.com.cwi.api.security.controller;

import br.com.cwi.api.security.controller.request.AlterarUsuarioRequest;
import br.com.cwi.api.security.controller.request.UsuarioRequest;
import br.com.cwi.api.security.controller.response.UsuarioResponse;
import br.com.cwi.api.security.service.AlterarUsuarioService;
import br.com.cwi.api.security.service.BuscarUsuarioService;
import br.com.cwi.api.security.service.IncluirUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IncluirUsuarioService incluirUsuarioService;

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @Autowired
    private AlterarUsuarioService alterarUsuarioService;

    @PostMapping
    public UsuarioResponse incluir(@Valid @RequestBody UsuarioRequest request) {
        return incluirUsuarioService.incluir(request);
    }

    @GetMapping("/me")
    public UsuarioResponse buscar() {
        return buscarUsuarioService.buscar();
    }

    @PutMapping
    public void alterar(@Valid @RequestBody AlterarUsuarioRequest request) {
        alterarUsuarioService.alterar(request);
    }

}
