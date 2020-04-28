-- Criando a tabela estado
create table estados ( 
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- Surrogade key - Chave sintética
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    -- ENUM -> deve assumir um dos valores definidos
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5,2) NOT NULL, -- Base de milhões
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);