SELECT * from prefeitos;
SELECT * from cidades;

SELECT * from cidades c inner join prefeitos p on c.id = p.cidade_id;
SELECT * from cidades c left join prefeitos p on c.id = p.cidade_id;
-- o mesmo que left outer join
-- retorna interseção e cidades, pois estão do lado esquerdo

SELECT * from cidades c right join prefeitos p on c.id = p.cidade_id;
-- o mesmo que right outer join
-- retorna interseção e prefeitos, pois estão do lado direito

SELECT * from cidades c left join prefeitos p on c.id = p.cidade_id
union
SELECT * from cidades c right join prefeitos p on c.id = p.cidade_id
-- equivalente ao full join

