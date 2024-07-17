import { Check, X } from 'lucide-react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import comparison from '@/data/comparison.json';
import { createTable } from '@/helpers/tableUtility';

const Wrapper = styled.div`
  height: calc(94vmax - 4.375rem);
  overflow: auto;
`;

const TableWrapper = styled.div`
  font-size: 0.875rem;
  overflow: auto;

  table {
    border-collapse: collapse;
    overflow: auto;
    table-layout: fixed;
    width: 100%;
  }

  tr {
    line-height: 1.5;

    th,
    td {
      border-left: 1px solid #f1f1f1;
      padding: 0.375rem 0.125rem;
      text-align: center;
      width: 5.5rem;

      &:first-of-type {
        background-color: white;
        border-left: none;
        left: 0;
        position: sticky;
        text-align: left;
        width: 8rem;
        z-index: 2;
      }
    }

    th {
      border-bottom: 1px solid #f1f1f1;
      text-decoration: underline;

      &:first-of-type {
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
`;

const BottomText = styled.p`
  font-size: 0.875rem;
`;

function CompareTable() {
  const { headers, tableData } = createTable();

  function getContent(value: ArrayType[0]) {
    if (typeof value === 'string') {
      return value;
    }

    if (value) {
      return <Check color="#216321" size={24} />;
    }

    return <X color="#636363" size={24} />;
  }

  return (
    <Wrapper>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={uuidv4()}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((columns) => (
              <tr key={uuidv4()}>
                {columns.map((column) => (
                  <td key={uuidv4()}>{getContent(column)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapper>

      <BottomText>{comparison.footer}</BottomText>
    </Wrapper>
  );
}

export default CompareTable;

type ArrayType = (string | boolean)[];
