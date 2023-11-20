import { Button, OutlinedInput, Stack, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import { employeesToolbarStyles } from './EmployeesToolbar.styles';
import { useTranslation } from 'react-i18next';
import { EmployeeStatusSelect } from '../../../../shared/ui/inputs/EmployeeStatusSelect';
import { useEmployeesToolbar } from './useEmployeesToolbar';
import AddIcon from '@mui/icons-material/Add';

interface EmployeesToolbarProps {
  onFilter: (status: string, search: string) => void;
}

export const EmployeesToolbar = ({ onFilter }: EmployeesToolbarProps) => {
  const { t } = useTranslation();

  const { status, search, handleChangeStatus, handleChangeSearch } =
    useEmployeesToolbar({ onFilter });

  return (
    <Stack sx={employeesToolbarStyles.container}>
      <Button
        color={'primary'}
        variant={'contained'}
        sx={employeesToolbarStyles.addButton}
        endIcon={<AddIcon sx={employeesToolbarStyles.addIcon} />}
      >
        {t('labels.create')}
      </Button>
      <Box sx={employeesToolbarStyles.inputContainer}>
        <OutlinedInput
          placeholder={t('placeholders.search')}
          fullWidth
          sx={employeesToolbarStyles.textInput}
          startAdornment={<Search />}
          value={search}
          onChange={handleChangeSearch}
        />
        <Box sx={employeesToolbarStyles.divider} />
        <Box sx={employeesToolbarStyles.select}>
          <EmployeeStatusSelect
            value={status}
            onChange={handleChangeStatus}
            withClearOption
          />
        </Box>
      </Box>
    </Stack>
  );
};
