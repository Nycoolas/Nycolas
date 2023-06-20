import styled from "styled-components";
import { FaPen, FaTrash, FaTools } from "react-icons/fa";

export const TableContainer = styled.div`
  width: 90%;
  background: #000000;
  padding: 5rem;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 2rem 0.1rem #dddddd;
  position: relative;
  overflow-x: auto;
  min-height: 100vh;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 60rem;
  border-collapse: collapse;
  color: #ffffff;
`;

export const Thead = styled.thead`
`;

export const Th = styled.th`
  font-size: clamp(1.4rem, 1.6rem, 2.2rem);
  background: #00000096;
  color: #e6e6e6;
`;
export const Tr = styled.tr` 
  :nth-child(odd) {
    background-color: green;
  }
`;

export const Td = styled.td`
  font-size: clamp(1rem, 1.2rem, 1.8rem);
  text-align: center;
  padding: 0.5rem;
  
  @media only screen and (max-width: 915px){
    padding: 1rem;
    min-width: 20rem;
  }

  input {
    padding: 0.5rem;
    border: 0.1rem solid var(--border-color);
    outline: none;
    background: none;
  }

  :first-child {
    max-width: 2rem;
  }
  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export const EditIcon = styled(FaPen)`
  color: var(--valid-bg);
  margin-right: 2rem;
`;

export const RemoveIcon = styled(FaTrash)`
  color: #10e319;
`;
export const ToolsIcon = styled(FaTools)`
  color: #e6e6e6;
`;


export const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 30%;
    height: 30%;
    object-fit: contain;
  }

  h2 {
    font-size: clamp(1.4rem, 1.6rem, 2rem);
    color: var(--label);
    text-align: center;
  }
`;

export const SaveButton = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: var(--valid-bg);
  margin-right: .5rem;
  border-radius: .5rem;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: green;
  border-radius: .5rem;
  cursor: pointer;
`;