-- Tabela "interns"
CREATE TABLE interns (
  id VARCHAR(36) PRIMARY KEY,
  nome VARCHAR(200) NOT NULL,
  prontuario VARCHAR(45) NOT NULL
);

-- Tabela "hours"
CREATE TABLE hours (
  id VARCHAR(36) PRIMARY KEY,
  intern_id VARCHAR(36), -- Chave estrangeira referenciando a tabela "interns"
  data_entrada DATETIME,
  data_saida DATETIME,
  hora_entrada TIME,
  hora_saida TIME,
  valor_hora DECIMAL,
  salario DECIMAL,
  FOREIGN KEY (intern_id) REFERENCES interns(id)
);
