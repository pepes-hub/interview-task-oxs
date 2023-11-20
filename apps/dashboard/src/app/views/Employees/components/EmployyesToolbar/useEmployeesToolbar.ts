import { ChangeEvent, useState } from 'react';
import { EmployeeStatus } from '@interview-task-oxs/libs';
import { debounce } from '../../../../shared/helpers/debounce';

interface UseEmployeesToolbarProps {
  onFilter: (status: string, search: string) => void;
}

export const useEmployeesToolbar = ({ onFilter }: UseEmployeesToolbarProps) => {
  const [status, setStatus] = useState<EmployeeStatus | ''>('');
  const [search, setSearch] = useState('');

  const handleChangeStatus = (status: string) => {
    setStatus(status as EmployeeStatus);

    onFilter(status, search);
  };

  const handleChangeSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(event.target.value);

    debounce(() => {
      onFilter(status, event.target.value);
    }, 200);
  };

  return {
    status,
    search,
    handleChangeStatus,
    handleChangeSearch,
  };
};
