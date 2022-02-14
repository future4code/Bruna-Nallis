SET SQL_SAFE_UPDATES = 0;
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
#A. Uma chave estrangeira são os campos que a chave primária da tabelha. Seu uso possibilita a implementação da integridade de dados diretamente no banco de dados.as

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004");
        
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muito bom!",
    7,
		"008"); #Não é possível adicionar ou atualizar uma linha filha: estrangeira falha na restrição de chave. Não é possível analizar uma linha inexistente.
        
ALTER TABLE Movie DROP COLUMN rating;

DELETE FROM Movie WHERE id = 001; #11:03:26	DELETE FROM Movie WHERE id = 001	0 row(s) affected.

#Ex.2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

# A tabela pega o Id das tabelas de filme e atores e move para uma chave estrangeira.

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"011",
    "009"
); #Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.

DELETE FROM MovieCast WHERE id = 001; #Coluna desconhecida 'id' na 'cláusula where'.

SELECT * FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;


        