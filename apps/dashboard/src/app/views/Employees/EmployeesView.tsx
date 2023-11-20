import { Grid, Stack, Box } from '@mui/material';
import { useEmployeesView } from './useEmployeesView';
import { EmployeeCard } from './components/EmployeeCard';
import { PageWrapper } from '../../shared/ui/PageWrapper';
import { EmployeesToolbar } from './components/EmployyesToolbar';

export const EmployeesView = () => {
  const { employees, handleFilter, handleChangeStatus } = useEmployeesView();

  return (
    <PageWrapper>
      <Stack>
        <Box sx={{ pb: '76px' }}>
          <EmployeesToolbar onFilter={handleFilter} />
        </Box>
        <Grid container spacing={'40px'} rowSpacing={'50px'}>
          {employees.map((employee) => {
            const handleChange = (status: string) => {
              handleChangeStatus(employee.id, status);
            };

            return (
              <EmployeeCard
                employee={employee}
                key={employee.id}
                onUpdateStatus={handleChange}
              />
            );
          })}
        </Grid>
      </Stack>
    </PageWrapper>
  );
};
