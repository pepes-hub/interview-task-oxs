import { Test, TestingModule } from '@nestjs/testing';

import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [EmployeesService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<EmployeesController>(EmployeesController);
      expect(appController.getAll()).toEqual({ message: 'Hello API' });
    });
  });
});
