-- criando a tabela estado!
-- UNSIGNED = sem sinal
-- DECIMAL(5,2) tem 5 dígitos e 2 dígitos são pontos flutuantes (casas decimais). Como vai trabalhar a população com milhões, não precisa de um número muito grande
create table estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL UNIQUE,
    sigla VARCHAR(2) NOT NULL UNIQUE,
    regiao ENUM("Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul") NOT NULL,
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id)
);