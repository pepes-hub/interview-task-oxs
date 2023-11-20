import { Select } from '../Select';
import { EMPLOYEE_STATUS_OPTIONS } from './constants/employeeStatusOptions';
import { useTranslation } from 'react-i18next';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const EmployeeStatusSelect = (props: SelectProps) => {
  const { t } = useTranslation();

  return (
    <Select
      withClearOption
      options={EMPLOYEE_STATUS_OPTIONS}
      placeholder={t('placeholders.filterByStatus')}
      {...props}
    />
  );
};
