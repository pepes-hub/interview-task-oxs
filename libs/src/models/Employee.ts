export enum EmployeeStatus {
  Working = 'working',
  OnVacation = 'onVacation',
  LunchTime = 'lunchTime',
  BusinessTrip = 'businessTrip',
}

export interface Employee {
  id: number;
  name: string;
  status: EmployeeStatus;
  img: string;
}
