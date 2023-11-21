import { useEffect, useRef, useState } from 'react';
import { Employee } from '@interview-task-oxs/libs';
import { useApi } from './API/useApi';
import { useSnackbar } from '../providers/SnackbarProvider';
import { useTranslation } from 'react-i18next';

export const useEmployeesData = () => {
  const initialized = useRef(false);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const { employeesAPI } = useApi();
  const { open } = useSnackbar();
  const { t } = useTranslation();

  const handleFetch = async () => {
    try {
      const response = await employeesAPI.list();

      if (response && response.data) {
        setEmployees(response.data);
      }
    } catch (error) {
      open({
        message: t('errors.fetchEmployees'),
        severity: 'error',
      });
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
