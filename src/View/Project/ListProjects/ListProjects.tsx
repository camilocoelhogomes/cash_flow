import {useEffect, useState} from 'react';
import {api} from '../../Api/Api';
import {ChevronLeftIcon, ChevronRightIcon} from '@radix-ui/react-icons';
import GetProject from '../GetProject/GetProject';
import Button from '../../components/ButtonFactory/Button';
import {Brackets} from 'lucide-react';
import {Fields} from '../../components/FieldsFactory';
import {PaginationSearch} from '../../../utils/Common/Interfaces';
import {IProject} from '../../../utils/Common/Interfaces/IProject';
import CreateProject from '../CreateProject/CreateProject';
import {TableFactory} from '../../components/TableFactory';

export default function Listprojects() {
  const [queryParams, setQueryParams] = useState({
    pagination: 0,
    limit: 15,
    query: {},
  });

  const [projects, setProjects] = useState<PaginationSearch<IProject>>();

  const load = () => api.listProject(queryParams).then(setProjects);

  useEffect(() => {
    load();
  }, [queryParams]);

  if (projects) {
    return (
      <div className="flex flex-col space-y-2 justify-between h-full">
        <div className="flex justify-between border-b border-slate-300 dark:border-slate-600 py-6 my-4">
          <Fields.Heading>Análises</Fields.Heading>
          <CreateProject onFinish={load} />
        </div>

        {projects.result.length ? (
          <div className="flex flex-col flex-1 grid-cols-1 gap-4">
            <TableFactory.Root>
              <TableFactory.Header>
                <TableFactory.ColumnHeaderCell>
                  NOME
                </TableFactory.ColumnHeaderCell>
                <TableFactory.ColumnHeaderCell>
                  DESCRIÇÃO
                </TableFactory.ColumnHeaderCell>
                <TableFactory.ColumnHeaderCell>
                  ID
                </TableFactory.ColumnHeaderCell>
              </TableFactory.Header>
              <TableFactory.Body>
                {projects.result.map(item => (
                  <TableFactory.Row key={item.id}>
                    <TableFactory.RowHeaderCell>
                      <GetProject project={item} />
                    </TableFactory.RowHeaderCell>
                    <TableFactory.Cell>{item.projectDs}</TableFactory.Cell>
                    <TableFactory.Cell>{item.id}</TableFactory.Cell>
                  </TableFactory.Row>
                ))}
              </TableFactory.Body>
            </TableFactory.Root>
          </div>
        ) : (
          <div className="text-indigo-200 flex flex-col flex-1 items-center">
            <Brackets size={180} /> Nenhum item cadastrado :(
          </div>
        )}
        <footer className="items-center flex justify-between gap-4 border-t py-4 border-slate-300">
          <div className="space-x-4 items-center">
            <Button color="soft">
              <ChevronLeftIcon />
              anterior
            </Button>
            <strong>{queryParams.pagination}</strong>
            <Button color="soft">
              proximo
              <ChevronRightIcon />
            </Button>
          </div>
          <div>
            <>Resultados: {projects.total}</>
          </div>
        </footer>
      </div>
    );
  }
}
