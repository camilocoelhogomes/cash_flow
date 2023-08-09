import {useState} from 'react';
import {Flex, Text, Button, Table} from '@radix-ui/themes';
import {container} from 'tsyringe';
import {ListAnalisys} from '../../Controller/Analisys/ListAnalisyt';
import PageLoadingIndicator from '../components/LoadingIndicator/PageLoadingIndicator';
import {useQuery} from '@tanstack/react-query';
import LoadState from '../components/LoadingIndicator/LoadState';
import {Analisys} from '../../Model/Entitys/Analisys';
import {PaginationSearch} from '../../Model/Constants/PaginationSearch';

type Props = {};

export default function ListAnalyzes({}: Props) {
  const listFunction = container.resolve(ListAnalisys);
  const [queryParams, setQueryParams] = useState({page: 1, limit: 15});

  const list = useQuery<PaginationSearch<Analisys>, Error>(
    ['analizes', queryParams],
    () => listFunction.listAnalisys({}, queryParams.page, queryParams.limit)
  );

  return (
    <LoadState status={list.status} error={list.error}>
      <Flex direction="column" gap="2">
        <Button color="brown">Let's go</Button>
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
          <Text>{list.data.total}</Text>
        </Table.Root>
      </Flex>
    </LoadState>
  );
}
