import {useEffect, useState} from 'react';
import {Flex, Text, Table, Heading} from '@radix-ui/themes';
import {useQuery} from '@tanstack/react-query';
import LoadState from '../components/LoadingIndicator/LoadState';
import {PaginationSearch} from '../../Model/Constants/PaginationSearch';
import {api} from '../Api/Api';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import {generateNumberId} from '../../utils/Functions';
import CreateAnalysis from '../CreateAnalysis/CreateAnalysis';
import GetAnalysis from '../GetAnalysis/GetAnalysis';
import {useAnalysisStore} from '../store/AnalysisStore';
import Button from '../components/ButtonFactory/Button';
import {Project} from '../../Model/Entitys/Project';

export default function ListAnalyzes() {
  const [queryParams, setQueryParams] = useState({
    pagination: 0,
    limit: 15,
    query: {},
  });
  const [analyzes, setAnalyzes] = useState<Project[]>();
  //const list = useQuery<PaginationSearch<IAnalisys>, Error>(['analizes', queryParams], () => api.listAnalisys(queryParams));
  useEffect(() => {
    api.listProject(queryParams).then(e => setAnalyzes(e.result));
  }, [queryParams]);
  if (analyzes) {
    return (
      <LoadState status={'success'} error={undefined}>
        <Flex direction="column" gap="2">
          <div className="flex justify-between border-b border-slate-300 dark:border-slate-600 py-6 my-4">
            <Heading>Análises</Heading>
            <CreateAnalysis />
          </div>
          <div className="grid grid-cols-1 gap-4 ">
            {(analyzes ?? []).map((item, index) => (
              <GetAnalysis key={index} analysis={item} />
            ))}
          </div>
          <footer className="items-center flex gap-4">
            <Button>
              <ChevronLeftIcon />
              anterior
            </Button>
            <strong>{analyzes.length}</strong>
            <Button>
              proximo
              <ChevronRightIcon />
            </Button>
          </footer>
        </Flex>
      </LoadState>
    );
  }
}
