import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Employee, EmployeeStatus } from '@interview-task-oxs/libs';
import { EMPLOYEES } from './constants/employeesList';

let employees = [...EMPLOYEES];

@Injectable()
export class EmployeesService {
  getAll(): Employee[] {
    return employees ?? [];
  }
  get(id: string): Employee | undefined {
    const employee = employees.find((employee) => {
      return employee.id.toString() === id;
    });

    if (!employee) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return employee;
  }
  update(id: string, status: EmployeeStatus) {
    const employee = employees.find((employee) => {
      return employee.id.toString() === id;
    });

    if (!employee) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    employees = employees.reduce((acc, employee) => {
      if (employee.id.toString() === id) {
        employee.status = status;
      }

      acc.push(employee);

      return acc;
    }, [] as Employee[]);
  }
  delete(id: string) {
    const employee = employees.find((employee) => {
      return employee.id.toString() === id;
    });

    if (!employee) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    employees = employees.filter((employee) => {
      return employee.id.toString() !== id;
    });
  }
}
