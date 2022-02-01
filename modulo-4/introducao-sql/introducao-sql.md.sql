USE `carver-bruna-golinelli-nallis`;

#Ex.1 
#a- VARCHAR(n) - strings de no máximo n caracteres;
# DATE - representa uma data (YYYY-MM-DD);
# Primary Key -  um identificador único;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES
(
	"002", 
  "Glória Pires",
  1200.000,
  "1963-08-23", 
  "female");
  # Entrada duplicada '001' para a chave 'PRIMARY'. Isso acontece pois o identificador tem que ser unico.alter
  
  INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#A contagem de colunas não corresponde à contagem de valores na linha 1. Isso ocorre pois não tem o aniversario e o genero no Insert

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Fernanda Lima",
  400000,
  "1949-04-18", 
  "male"
);
# O campo 'nome' não tem um valor padrão.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
#Valor de data incorreto 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Leandro Hassum",
  819333.33,
  "1973-09-26", 
  "male"
);

#Ex3
SELECT name from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid";

SELECT id, name from Actor WHERE id = "002";
#Coluna desconhecida 'nome' na 'lista de campos'.

#Ex.4
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
#A QUERY ESTÁ BUSCANDO POR NOMES QUE TENHAM A OU J E CUJO SALARIOS SÃO SUPERIORES A 30000

SELECT * FROM Actor
WHERE (name NOT LIKE "A%" ) AND salary > 350000;

SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%");

SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary between 300000 AND 900000;

#Ex.5
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT,
    premiere_date DATE NOT NULL,
    review NUMERIC(6) NOT NULL
);
INSERT INTO Movie (id, name,sinopse, premiere_date, review)
VALUES(
 "001",
 "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
 "2006-01-06",
 "7");
 
 INSERT INTO Movie (id, name,sinopse, premiere_date, review)
VALUES(
 "002",
 "Doce de mãe",
 "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
 "2012-12-27",
 "10");
 
INSERT INTO Movie (id, name,sinopse, premiere_date, review)
VALUES(
 "003",
 "Dona Flor e Seus Dois Maridos",
 "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
 "2017-11-02",
 "8");

INSERT INTO Movie (id, name,sinopse, premiere_date, review)
VALUES(
 "004",
 "O Lobo atras da Porta",
 "Uma criança é sequestrada e seus pais, Bernardo e Sylvia, decidem ir até a delegacia. O delegado resolve interrogá-los separadamente e descobre que Bernardo tinha uma amante, Rosa, que também é levada ao local para averiguações. A partir de depoimentos do trio, o delegado descobre uma rede de mentiras, amor, vingança e ciúmes.",
 "2013-10-02",
 "10");  
 
 #Ex.6
 SELECT id, name, review FROM Movie WHERE id = "003";

 SELECT * FROM Movie WHERE name = "O Lobo atras da Porta";
 
 SELECT id, name, sinopse FROM Movie WHERE review > 7;
 
 #Ex.7
 
 SELECT * FROM Movie WHERE name LIKE "%vida%";
 
 SELECT * FROM Movie WHERE name LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";
      
SELECT * FROM Movie WHERE premiere_date < "2022-01-31";