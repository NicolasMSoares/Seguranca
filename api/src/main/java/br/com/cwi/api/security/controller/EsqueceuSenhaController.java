package br.com.cwi.api.security.controller;

import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.service.RedefinirSenhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/senha")
public class EsqueceuSenhaController {

    @Autowired
    private RedefinirSenhaService redefinirSenhaService;


    @PostMapping("/recuperar")
    public String recuperarCodigo(@RequestBody Usuario usuario) {
        return redefinirSenhaService.solicitarCodigo(usuario.getEmail());
    }

    @PostMapping("/redefinir")
    public String redefinirSenha(@RequestBody Usuario usuario) {
        return redefinirSenhaService.alterarSenha(usuario);
    }

}
