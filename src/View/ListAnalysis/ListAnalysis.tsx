import { useState } from 'react';
import { Flex, Text, Button, Table, Heading, TextField } from '@radix-ui/themes';
import { container } from 'tsyringe';
import { ListAnalisys } from '../../Controller/Analisys/ListAnalisyt';
import PageLoadingIndicator from '../components/LoadingIndicator/PageLoadingIndicator';
import { useQuery } from '@tanstack/react-query';
import LoadState from '../components/LoadingIndicator/LoadState';
import { Analisys } from '../../Model/Entitys/Analisys';
import { PaginationSearch } from '../../Model/Constants/PaginationSearch';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

type Props = {};

export default function ListAnalyzes({ }: Props) {
  const listFunction = container.resolve(ListAnalisys)
  const [queryParams, setQueryParams] = useState({ page: 1, limit: 15 })
  const list = useQuery<PaginationSearch<Analisys>, Error>(['analyzes', queryParams], () => listFunction.listAnalisys({}, queryParams.page, queryParams.limit))

  function goNext() { if (list.data.hasMore) { setQueryParams({ page: queryParams.page + 1, limit: 15 }) } }
  function goPrevious() { if (queryParams.page > 1) { setQueryParams({ page: queryParams.page - 1, limit: 15 }) } }


  return (
    <Flex direction="column" gap="2">

      <Heading>Analyzes</Heading>

      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Search ..." />
      </TextField.Root>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <LoadState status={list.status} error={list.error}>

          <Table.Body>
            {list.data.result.map(item =>
              <Table.Row>
                <Table.RowHeaderCell>{item.id}</Table.RowHeaderCell>
                <Table.Cell>{item.analisysNm}</Table.Cell>
                <Table.Cell>{item.analisysDs}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
          <Flex gap='2' justify={'between'}>
            <Text>{list.data.total}</Text>
            <Button variant='outline' onClick={goPrevious}>previous</Button>
            <Button variant='outline' onClick={goNext}>next</Button>
          </Flex>
        </LoadState>
      </Table.Root>
    </Flex>
  );
}
