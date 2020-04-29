SELECT * from prefeitos

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null);

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', null);


-- Erro pois está duplicado registro

-- INSERT INTO prefeitos
--     (nome, cidade_id)
-- VALUES
--     ('Rodrigo Pinheiro', 3);