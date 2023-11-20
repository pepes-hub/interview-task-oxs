import { useEffect, useRef, useState } from 'react';
import { Employee } from '@interview-task-oxs/libs';
import { useApi } from './API/useApi';

export const useEmployeesData = () => {
  const initialized = useRef(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const { employeesAPI } = useApi();

  const handleFetch = async () => {
    const response = await employeesAPI.list();

    if (response && response.data) {
      setEmployees(response.data);
    }
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      handleFetch();
    }
  }, []);

  const refresh = () => {
    handleFetch();
  };

  return {
    employees,
    refresh,
  };
};
