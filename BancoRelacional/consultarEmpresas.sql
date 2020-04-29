SELECT e.nome Empresa, c.nome Cidade
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede

-- retorna quando id da empresa é igual ao id da empresa unidade
-- e o id da cidade igual ao id da cidade da unidade
-- na tabela criada para interseção 