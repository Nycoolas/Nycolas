import { FormContainer, Form, InputArea, Button } from "./styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormComponent = () => {
  const [nome, setNome] = useState("");
  const [cargaHorariaInicial, setCargaHorariaInicial] = useState("");
  const [cargaHorariaFinal, setCargaHorariaFinal] = useState("");
  const [aluno, setAluno] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const listaDeSalas = JSON.parse(localStorage.getItem("salas")) || [];

    const salas = {
      id: uuidv4().slice(0,5),
      nome: nome,
      cargaHorariaInicial: cargaHorariaInicial,
      cargaHorariaFinal: cargaHorariaFinal,
      aluno: aluno,
    };

    listaDeSalas.push(salas);
    localStorage.setItem("salas", JSON.stringify(listaDeSalas));

    setNome("");
    setCargaHorariaInicial("");
    setCargaHorariaFinal("");
    setAluno("");

    window.location.reload()
  };
  
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputArea>
          <label nome="nome" htmlFor="nome">
            Sala
          </label>
          <input
            type="number"
            id="nome"
            placeholder="Numero da sala"
            minLength={1}
            maxLength={3}
            required
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </InputArea>
        <InputArea>
          <label nome="cargaHorariaInicial" htmlFor="cargaHorariaInicial">
            CG(inicial)
          </label>
          <input
            type="time"
            id="cargaHorariaInicial"
            placeholder="Carga horária inicial da sala"
            minLength={1}
            maxLength={5}
            required
            value={cargaHorariaInicial}
            onChange={(event) => setCargaHorariaInicial(event.target.value)}
          />
        </InputArea>
        <InputArea>
          <label nome="cargaHorariaFinal" htmlFor="cargaHorariaFinal">
            CG(final)
          </label>
          <input
            type="time"
            id="cargaHorariaFinal"
            placeholder="Carga horária final da sala"
            minLength={1}
            maxLength={5}
            required
            value={cargaHorariaFinal}
            onChange={(event) => setCargaHorariaFinal(event.target.value)}
          />
        </InputArea>
        <InputArea>
          <label nome="aluno" htmlFor="aluno">
            Alunos
          </label>
          <input
            type="number"
            id="aluno"
            placeholder="N° de alunos na sala"
            minLength={1}
            maxLength={2}
            required
            value={aluno}
            onChange={(event) => setAluno(event.target.value)}
          />
        </InputArea>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  );
};
