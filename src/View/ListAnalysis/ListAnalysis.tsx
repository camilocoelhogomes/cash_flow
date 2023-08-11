import { useState } from 'react';
import { Flex, Text, Button, Table, Heading } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import LoadState from '../components/LoadingIndicator/LoadState';
import { PaginationSearch } from '../../Model/Constants/PaginationSearch';
import { api } from '../Api/Api';
import { IAnalisys } from '../../utils/Common/Interfaces';

export default function ListAnalyzes() {
  const [queryParams, setQueryParams] = useState({ pagination: 1, limit: 15, query: {} });

  const list = useQuery<PaginationSearch<IAnalisys>, Error>(['analizes', queryParams], () => api.listAnalisys(queryParams));

  if (list.data) {
    return (
      <LoadState status={list.status} error={list.error}>
        <Flex direction="column" gap="2">
          <Heading>Análises</Heading>
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
          <Flex>
            <Button variant='soft'>anterior</Button>
            <Text>{list.data.total}</Text>
            <Button variant='soft'>proximo</Button>
          </Flex>
        </Flex>
      </LoadState>
    );
  }
}
