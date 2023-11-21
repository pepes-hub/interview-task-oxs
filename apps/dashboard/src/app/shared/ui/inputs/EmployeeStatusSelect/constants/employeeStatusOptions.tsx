import { EmployeeStatus } from '@interview-task-oxs/libs';
import TripOriginIcon from '@mui/icons-material/TripOrigin';

const iconStyles = {
  width: '14px',
  height: '14px',
};

export const EMPLOYEE_STATUS_OPTIONS = [
  {
    translationKey: 'employeeStatus.working',
    value: EmployeeStatus.Working,
    icon: (
      <TripOriginIcon sx={{ ...iconStyles, color: '#2ED47A !important' }} />
    ),
  },
  {
    translationKey: 'employeeStatus.businessTrip',
    value: EmployeeStatus.BusinessTrip,
    icon: (
      <TripOriginIcon sx={{ ...iconStyles, color: '#9C38CD !important' }} />
    ),
  },
  {
    translationKey: 'employeeStatus.lunchTime',
    value: EmployeeStatus.LunchTime,
    icon: (
      <TripOriginIcon sx={{ ...iconStyles, color: '#109CF2 !important' }} />
    ),
  },
  {
    translationKey: 'employeeStatus.onVacation',
    value: EmployeeStatus.OnVacation,
    icon: (
      <TripOriginIcon sx={{ ...iconStyles, color: '#E67162 !important' }} />
    ),
  },
];
