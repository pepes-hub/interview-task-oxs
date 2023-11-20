import { useEmployeesData } from '../../shared/hooks/useEmployeesData';
import { useMemo, useState } from 'react';
import { useApi } from '../../shared/hooks/API/useApi';

export const useEmployeesView = () => {
  const [filters, setFilters] = useState<{
    status: string;
    search: string;
  }>({
    status: '',
    search: '',
  });

  const { employees, refresh } = useEmployeesData();
  const { employeesAPI } = useApi();

  const handleFilter = (status: string, search: string) => {
    setFilters({
      status,
      search,
    });
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const { status, search } = filters;

      if (status && employee.status !== status) {
        return false;
      }

      return !(
        search && !employee.name.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [employees, filters]);

  const handleChangeStatus = async (id: number, status: string) => {
    try {
      const response = await employeesAPI.update(id, status);

      if (response) {
        refresh();
      }
    } catch (error) {}
  };

  return {
    employees: filteredEmployees,
    handleFilter,
    handleChangeStatus,
  };
};
