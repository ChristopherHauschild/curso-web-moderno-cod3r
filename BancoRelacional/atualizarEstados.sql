UPDATE estados
set nome = 'Maranhão' -- setar valor para atributo nome
where sigla = 'MA'

SELECT est.nome from estados est where sigla = "MA"

UPDATE estados
set nome = 'Paraná', 
    populacao = 11.32
where sigla = 'PR'

SELECT est.nome, sigla, populacao from estados est where sigla = "PR"