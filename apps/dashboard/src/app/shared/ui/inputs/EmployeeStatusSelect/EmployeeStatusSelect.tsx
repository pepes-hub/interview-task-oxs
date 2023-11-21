import { Select } from '../Select';
import { EMPLOYEE_STATUS_OPTIONS } from './constants/employeeStatusOptions';
import { useTranslation } from 'react-i18next';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  withClearOption?: boolean;
  variant?: 'standard' | 'outlined';
}

export const EmployeeStatusSelect = (props: SelectProps) => {
  const { t } = useTranslation();

  return (
    <Select
      options={EMPLOYEE_STATUS_OPTIONS}
      placeholder={t('placeholders.filterByStatus')}
      {...props}
    />
  );
};
