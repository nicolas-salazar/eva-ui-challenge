import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  font-family: arial, sans-serif;
  margin-bottom: 32px;
  margin-top: 32px;
  width: 100%;

  & > td,
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    min-height: 35px;
  }

  & > th,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    min-height: 35px;
  }

  & tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const LoadingLabel = styled.p.attrs({
  children: 'Loading...',
})`
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: center;
`;
