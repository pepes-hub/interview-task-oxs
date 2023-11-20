import axios from 'axios';
import { API_URL } from '../constants/apiConstants';

export const useEmployeesAPI = () => {
  const list = async () => {
    return axios.get(`${API_URL}/employees`);
  };

  const update = async (id: number, status: string) => {
    return axios.post(`${API_URL}/employees/${id}`, { status });
  };

  return {
    list,
    update,
  };
};
