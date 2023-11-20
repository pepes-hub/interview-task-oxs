import { Controller, Delete, Get, Param, Post, Body } from '@nestjs/common';

import { EmployeesService } from './employees.service';
import { EmployeeStatus } from '@interview-task-oxs/libs';

@Controller()
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get('employees')
  getAll() {
    return this.employeesService.getAll();
  }

  @Get('employees/:userId')
  get(@Param('userId') userId: string) {
    return this.employeesService.get(userId);
  }

  @Post('employees/:userId')
  post(
    @Param('userId') userId: string,
    @Body() body: { status: EmployeeStatus }
  ) {
    return this.employeesService.update(userId, body.status);
  }

  @Delete('employees/:userId')
  delete(@Param('userId') userId: string) {
    return this.employeesService.delete(userId);
  }
}
