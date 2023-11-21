import axios from 'axios';
import { EMPLOYEES } from '../../../server/src/app/employees/constants/employeesList';
import { EmployeeStatus } from '@interview-task-oxs/libs';

describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/api`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });

  it('should return a proper employees collection', async () => {
    const res = await axios.get(`/api/employees`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual(EMPLOYEES);
  });

  it('should return selected Employee', async () => {
    const res = await axios.get(`/api/employees/1`);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(EMPLOYEES[0]);
  });

  it('should return error from wrong id', async () => {
    try {
      await axios.get(`/api/employees/100`);
    } catch (e) {
      expect(e.response.status).toBe(404);
    }
  });

  it('should accept status update', async () => {
    try {
      const res = await axios.post(`/api/employees/6`, {
        status: EmployeeStatus.LunchTime,
      });

      expect(res.status).toBe(201);
    } catch (e) {}
  });
});
