-- Foreign key de estados
select * from cidades

INSERT INTO cidades (id, nome, area, estado_id)
VALUES (1, 'Campinas', 795, 25)

UPDATE cidades
set id = 1
where nome = 'Campinas'

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 25)

UPDATE cidades
set estado_id = '19', id = 2
where nome = 'Niterói'

INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Caruaru',
    920.6,
    (select id from estados where sigla = 'PE')
)

UPDATE cidades
set id = 3
where nome = 'Caruaru'

INSERT INTO cidades 
    (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte', 248.2, (select id from estados where sigla = 'CE')
)

UPDATE cidades
set id = 4
where nome = 'Juazeiro do Norte'
