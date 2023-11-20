import { useEmployeesAPI } from './employees/employeesApi';

export const useApi = () => {
  const employeesAPI = useEmployeesAPI();

  return {
    employeesAPI,
  };
};
