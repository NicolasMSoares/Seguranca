DROP TABLE IF EXISTS permissao CASCADE;
DROP TABLE IF EXISTS usuario CASCADE;


CREATE TABLE usuario (
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	nome VARCHAR(100) NOT NULL,
	telefone VARCHAR(11) NOT NULL,
	email VARCHAR(100) NOT NULL,
	senha VARCHAR(100) NOT NULL,
	token_recuperar_senha VARCHAR(30),
	foto VARCHAR(512) NOT NULL,
	criado_em DATE,
	atualizado_em DATE,
	ativo BOOLEAN NOT NULL
);
ALTER TABLE usuario ADD CONSTRAINT pk_usuario PRIMARY KEY (id);
ALTER TABLE usuario ADD CONSTRAINT uk_usuario_email UNIQUE (email);


CREATE TABLE permissao (
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	nome VARCHAR(100) NOT NULL,
	usuario_id BIGINT NOT NULL
);
ALTER TABLE permissao ADD CONSTRAINT pk_permissao PRIMARY KEY (id);
ALTER TABLE permissao ADD CONSTRAINT uk_permissao UNIQUE (nome, usuario_id);
ALTER TABLE permissao ADD CONSTRAINT fk_permissao_usuario FOREIGN KEY (usuario_id) REFERENCES usuario;

insert into usuario (email, nome, senha, telefone, foto, ativo) values ('admin@cwi.com.br', 'admin', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', '51988888888', 'https://pbs.twimg.com/media/EnM7TmrXcAI0LKx.jpg', true);
insert into usuario (email, nome, senha, telefone, foto, ativo) values ('nicolas@cwi.com.br', 'nicolas', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', '51977777777', 'https://pbs.twimg.com/media/EnM7TmrXcAI0LKx.jpg', true);

insert into permissao (nome, usuario_id) values ('ADMIN', 1);
insert into permissao (nome, usuario_id) values ('USUARIO', 1);
insert into permissao (nome, usuario_id) values ('USUARIO', 2);


