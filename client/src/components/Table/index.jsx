import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  NotFoundContainer,
  EditIcon,
  RemoveIcon,
  ToolsIcon,
  CancelButton,
  SaveButton,
} from "./styles";

export const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const getSalas = () => {
    const listaDeSalas =
      JSON.parse(localStorage.getItem("salas")) || [];
    setTableData(listaDeSalas);
  };

  useEffect(() => {
    getSalas();
  }, []);

  const handleEdit = (salaId) => {
    setEditingId(salaId);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedData({});
  };

  const handleSaveEdit = (salaId) => {
    const salaEditada = tableData.find(
      (sala) => sala.id === salaId
    );

    salaEditada.nome =
      editedData[salaId]?.nome !== undefined
        ? editedData[salaId]?.nome
        : salaEditada.nome;
        salaEditada.cargaHorariaInicial =
      editedData[salaId]?.cargaHorariaInicial !== undefined
        ? editedData[salaId]?.cargaHorariaInicial
        : salaEditada.cargaHorariaInicial;
        salaEditada.cargaHorariaFinal =
      editedData[salaId]?.cargaHorariaFinal !== undefined
        ? editedData[salaId]?.cargaHorariaFinal
        : salaEditada.cargaHorariaFinal;
        salaEditada.aluno =
      editedData[salaId]?.aluno !== undefined
        ? editedData[salaId]?.aluno
        : salaEditada.aluno;
    localStorage.setItem("salas", JSON.stringify(tableData));
    setEditingId(null);
    setEditedData({});
  };

  const handleRemove = (event) => {
    const trElement = event.target.closest("tr");
    const salaId = trElement.getAttribute("data-id");
    trElement.remove();
    const listaDeSalas =
      JSON.parse(localStorage.getItem("salas")) || [];
    const updatedlistaDeSalas = listaDeSalas.filter(
      (sala) => sala.id !== salaId
    );
    localStorage.setItem(
      "salas",
      JSON.stringify(updatedlistaDeSalas)
    );
  };

  const handleFieldChange = (salaId, field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [salaId]: {
        ...prevData[salaId],
        [field]: value === "" ? null : value,
      },
    }));
  };

  return (
    <TableContainer>
      <Table>
        {tableData.length > 0 ? (
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Sala</Th>
              <Th>CGI</Th>
              <Th>CGF</Th>
              <Th>Alunos</Th>
              <Th>
                <ToolsIcon />
              </Th>
            </Tr>
          </Thead>
        ) : null}
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((sala) => (
              <Tr key={sala.id} data-id={sala.id}>
                <Td>{sala.id}</Td>
                <Td>
                  {editingId === sala.id ? (
                    <input
                      type="text"
                      value={
                        editedData[sala.id]?.nome !== undefined
                          ? editedData[sala.id]?.nome
                          : sala.nome
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          sala.id,
                          "nome",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    sala.nome || ""
                  )}
                </Td>
                <Td>
                  {editingId === sala.id ? (
                    <input
                      type="text"
                      value={
                        editedData[sala.id]?.cargaHorariaInicial !== undefined
                          ? editedData[sala.id]?.cargaHorariaInicial
                          : sala.cargaHorariaInicial
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          sala.id,
                          "cargaHorariaInicial",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    sala.cargaHorariaInicial || ""
                  )}
                </Td>
                <Td>
                  {editingId === sala.id ? (
                    <input
                      type="text"
                      value={
                        editedData[sala.id]?.cargaHorariaFinal !== undefined
                          ? editedData[sala.id]?.cargaHorariaFinal
                          : sala.cargaHorariaFinal
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          sala.id,
                          "cargaHorariaFinal",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    sala.cargaHorariaFinal || ""
                  )}
                </Td>
                <Td>
                  {editingId === sala.id ? (
                    <input
                      type="text"
                      value={
                        editedData[sala.id]?.aluno !== undefined
                          ? editedData[sala.id]?.aluno
                          : sala.aluno
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          sala.id,
                          "aluno",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    sala.aluno || ""
                  )}
                </Td>
                <Td>
                  {editingId === sala.id ? (
                    <>
                      <SaveButton onClick={() => handleSaveEdit(sala.id)}>
                        Salvar
                      </SaveButton>
                      <CancelButton onClick={handleCancelEdit}>
                        Cancelar
                      </CancelButton>
                    </>
                  ) : (
                    <>
                      <EditIcon onClick={() => handleEdit(sala.id)} />
                      <RemoveIcon onClick={(event) => handleRemove(event)} />
                    </>
                  )}
                </Td>
              </Tr>
            ))
          ) : (
            <NotFoundContainer>
              <img src="github_gif.gif" alt="Gif do mascote do Github" />
              <h2>Nenhum dado encontrado.</h2>
            </NotFoundContainer>
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
};
