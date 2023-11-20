import { Test } from '@nestjs/testing';

import { EmployeesService } from './employees.service';

describe('AppService', () => {
  let service: EmployeesService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [EmployeesService],
    }).compile();

    service = app.get<EmployeesService>(EmployeesService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getAll()).toEqual({ message: 'Hello API' });
    });
  });
});
