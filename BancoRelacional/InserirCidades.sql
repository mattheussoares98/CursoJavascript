insert into cidades (nome, area, estado_id)
values ("Campinas", 795, 6);

insert into cidades (nome, area, estado_id)
values ("Niterói", 133.9, 55);

insert into cidades (nome, area, estado_id)
values (
    "Caruaru",
     920.6, 
     (select id from estados where sigla = "PE")
     );

