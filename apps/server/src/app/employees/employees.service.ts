import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Employee, EmployeeStatus } from '@interview-task-oxs/libs';

let employees: Employee[] = [
  {
    id: 1,
    name: 'Johana Levi',
    status: EmployeeStatus.Working,
    img: 'example1',
  },
  {
    id: 2,
    name: 'Avraham Cohen',
    status: EmployeeStatus.OnVacation,
    img: 'example2',
  },
  {
    id: 3,
    name: 'Philip Leser',
    status: EmployeeStatus.BusinessTrip,
    img: 'example3',
  },
  {
    id: 4,
    name: 'Nicci Troiani',
    status: EmployeeStatus.BusinessTrip,
    img: 'example4',
  },
  {
    id: 5,
    name: 'Franz Ferdinand',
    status: EmployeeStatus.Working,
    img: 'example5',
  },
  {
    id: 6,
    name: 'Rebecca Moore',
    status: EmployeeStatus.Working,
    img: 'example6',
  },
];

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
