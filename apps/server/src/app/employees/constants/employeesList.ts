import { Employee, EmployeeStatus } from '@interview-task-oxs/libs';

export let EMPLOYEES: Employee[] = [
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
