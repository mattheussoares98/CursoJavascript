select * from estados;

select nome, sigla from estados
where nome like '%acre%';

select * from estados
where populacao >= 10
order by populacao;