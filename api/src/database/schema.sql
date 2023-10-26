create table interns (
  id: v4() PRIMARY KEY,
  nome: Varchar(200) NOT NULL,
  prontuario: Varchar(45) NOT NULL,
)

create table hours (
  id: v4() PRIMARY KEY,
  data_entrada: Datetime,
  data_saída: Datetime,
  hora_entrada: TIME,
  hora_saida: TIME,
  valor_hora: DECIMAL,
  salario: DECIMAL,
)
