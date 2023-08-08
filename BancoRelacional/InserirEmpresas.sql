INSERT INTO empresas (nome, cnpj)
values 
("BBAS3", 05865503000143),
("VALE3F", 39385574810001),
("EZTC4", 19203414000100);

ALTER TABLE empresas MODIFY cnpj varchar(14);

desc empresas;

select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
    VALUES 
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);