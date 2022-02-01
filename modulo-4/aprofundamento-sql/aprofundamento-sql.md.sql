SET SQL_SAFE_UPDATES = 0;

#Ex.1

#ALTER TABLE Actor DROP COLUMN salary; O Drop é usado para excluir a coluna salario da tabela.

#ALTER TABLE Actor CHANGE gender sex VARCHAR(6); O CHANGE serve para mudar o nome de um valor, nesse caso de gender para sex.

# ALTER TABLE Actor CHANGE gender gender VARCHAR(255); Aqui nesse caso o CHANGE está sendo usado para muitar a quantidade de caracteries do VARCHAR.  

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

#Ex.2

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date= "1993-07-17"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

UPDATE Actor
SET 
name = "Stan Lee",
birth_date = "1947-02-10",
salary = 1600000,
gender = "male"
WHERE id = "005";

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "009";
#0 linha(s) afetada(s) Linha(s) correspondentes: 0 Alterado: 0 Avisos: 0. Não houve alteração pois não tinha um correspondente para ser alterado.

#Ex.3

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE gender= "male" AND salary > 1000000;

#Ex.4

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender= "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

#Ex.5

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender; #A qurey pegou todos os generos listados na tabela Actor e os dividiu em 2 grupos, um  masculinos e outro feminino.

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

#Ex.6

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE review review FLOAT;

UPDATE Movie
SET playing_limit_date = "2022-02-31"
WHERE id = "003";

DELETE FROM Movie WHERE id = "001";

UPDATE Movie
SET sinopse = "A diverão esta garantida"
WHERE id = "001"; #0 linha(s) afetada(s) Linha(s) correspondentes: 0 Alterado: 0 Avisos: 0. Não houve alteração pois não tinha um correspondente para ser alterado.

