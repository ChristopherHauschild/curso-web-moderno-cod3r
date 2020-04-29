ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 9943843994931),
    ('Vale', 28174419311034),
    ('Cielo', 01534312393122);

DESC empresas;
-- descreve a tabela

SELECT * from empresas;
SELECT * from cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede) -- sede -> boolean
VALUES
    (1, 1, 1),
    (1, 2, 1),
    (2, 1, 0),
    (2, 2, 1);

SELECT * from empresas_unidades;