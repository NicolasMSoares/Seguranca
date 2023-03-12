package br.com.cwi.api.security.service;

import br.com.cwi.api.security.domain.Usuario;
import br.com.cwi.api.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class RedefinirSenhaService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private EmailService emailService;

    public String solicitarCodigo(String email) {
        Usuario usuario = usuarioRepository.findByEmail(email);
        usuario.setTokenRecuperarSenha(obterTokenRecuperarSenha(usuario.getId()));

        usuarioRepository.saveAndFlush(usuario);
        emailService.enviarEmailTexto(usuario.getEmail(), "Token de recuperação de senha", "Seu token de recuperação de senha é: "+usuario.getTokenRecuperarSenha());

        return "Token Eniviado!";
    }

    public String obterTokenRecuperarSenha(Long id) {
        DateFormat format = new SimpleDateFormat("ddMMyyyyHHmmssmm");
        return format.format(new Date())+id;
    }

    public String alterarSenha(Usuario usuario) {

        Usuario usuarioBanco = usuarioRepository.findByEmailAndTokenRecuperarSenha(usuario.getEmail(), usuario.getTokenRecuperarSenha());

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(usuario.getSenha());
        usuarioBanco.setSenha(encodedPassword);

        usuarioBanco.setTokenRecuperarSenha(null);
        usuarioRepository.save(usuarioBanco);

        return "Senha alterada com sucesso";
    }


}
