import { useEffect, useState } from 'react';
import { Heading } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import LoadState from '../components/LoadingIndicator/LoadState';
import { PaginationSearch } from '../../Model/Constants/PaginationSearch';
import { api } from '../Api/Api';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import { generateNumberId } from '../../utils/Functions';
import CreateAnalysis from '../CreateAnalysis/CreateProject';
import GetProject from '../GetAnalysis/GetProject';
import Button from '../components/ButtonFactory/Button';
import { Project } from '../../Model/Entitys/Project';
import { Brackets } from 'lucide-react';
import { Fields } from '../components/FieldsFactory';

export default function Listprojects() {
  const [queryParams, setQueryParams] = useState({
    pagination: 0,
    limit: 15,
    query: {},
  });
  const [projects, setprojects] = useState<Project[]>();
  //const list = useQuery<PaginationSearch<IAnalisys>, Error>(['analizes', queryParams], () => api.listAnalisys(queryParams));
  useEffect(() => {
    api.listProject(queryParams).then(e => setprojects(e.result));
  }, [queryParams]);

  if (projects) {
    return (

      <div className='flex flex-col space-y-2 justify-between h-full'>

        <div className="flex justify-between border-b border-slate-300 dark:border-slate-600 py-6 my-4">
          <Fields.Heading>Análises</Fields.Heading>
          <CreateAnalysis />
        </div>

        {projects.length ?

          <div className="flex flex-col flex-1 grid-cols-1 gap-4">
            {(projects ?? []).map(item => <GetProject key={item.id} project={item} />)}
          </div>
          :
          <div className='text-indigo-200 flex flex-col flex-1 items-center'><Brackets size={180} /> Nenhum item cadastrado :(</div>
        }

        <footer className="items-center flex justify-between gap-4 border-t py-4 border-slate-300">
          <div>
            <Button color='soft'>
              <ChevronLeftIcon />
              anterior
            </Button>
            <strong>{queryParams.pagination}</strong>
            <Button color='soft'>
              proximo
              <ChevronRightIcon />
            </Button >
          </div>

          <div>
            <>Resultados: {projects.length}</>
          </div>
        </footer>
      </div>

    );
  }
}
