SELECT * from estados

SELECT sigla, nome as 'Nome do Estado' from estados
where regiao = 'Sul'

SELECT nome, regiao, populacao from estados
where populacao >= 10
order by populacao desc