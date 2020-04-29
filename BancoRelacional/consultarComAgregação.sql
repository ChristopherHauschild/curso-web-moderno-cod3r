SELECT
    regiao as 'Região', -- necessário definir para agrupar
    sum(populacao) as Total
from estados
group by regiao
order by Total desc

-- soma população por regiao

SELECT
    avg(populacao) as Total
from estados

-- média de população por estado