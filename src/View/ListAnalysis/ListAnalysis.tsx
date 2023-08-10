import { useState } from 'react';
import { Flex, Text, Button, Table } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import LoadState from '../components/LoadingIndicator/LoadState';
import { Analisys } from '../../Model/Entitys/Analisys';
import { PaginationSearch } from '../../Model/Constants/PaginationSearch';

export default function ListAnalyzes() {
  const [queryParams, setQueryParams] = useState({ page: 1, limit: 15 });
  const list = useQuery<PaginationSearch<Analisys>, Error>(
    ['analizes', queryParams],
    () => window.api.listAnalisys()
  );

  if (list.data) {
    return (
      <LoadState status={list.status} error={list.error}>
        <Flex direction="column" gap="2">
          <Button color="brown">Teste do botao</Button>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {list.data.result.map(item => (
                <Table.Row>
                  <Table.RowHeaderCell>{item.id}</Table.RowHeaderCell>
                  <Table.Cell>{item.analisysNm}</Table.Cell>
                  <Table.Cell>{item.analisysDs}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
          <Text>{list.data.total}</Text>
        </Flex>
      </LoadState>
    );
  }
}
