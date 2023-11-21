import { Employee } from '@interview-task-oxs/libs';
import { Avatar, Card, Grid, Stack, Typography } from '@mui/material';
import { employeeCardStyles } from './EmployeeCard.styles';
import { EmployeeStatusSelect } from '../../../../shared/ui/inputs/EmployeeStatusSelect';
import { IMAGES } from '../../../../../assets/images';

interface EmployeeCardProps {
  employee: Employee;
  onUpdateStatus: (status: string) => void;
}

export const EmployeeCard = ({
  employee,
  onUpdateStatus,
}: EmployeeCardProps) => {
  return (
    <Grid item sm={12} md={6} lg={4} sx={employeeCardStyles.container}>
      <Card sx={employeeCardStyles.card}>
        <Stack sx={employeeCardStyles.cardBody}>
          <Stack sx={employeeCardStyles.avatarContainer}>
            <Avatar
              sx={employeeCardStyles.avatar}
              alt={employee.name}
              src={IMAGES[employee.img]}
            />
          </Stack>
          <Stack sx={employeeCardStyles.detailsContainer}>
            <Typography sx={employeeCardStyles.name}>
              {employee.name}
            </Typography>
            <EmployeeStatusSelect
              variant="standard"
              value={employee.status}
              onChange={onUpdateStatus}
            />
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
};
