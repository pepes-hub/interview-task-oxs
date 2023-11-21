import {
  Select as MuiSelect,
  SelectChangeEvent,
  MenuItem,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { employeeStatusSelectStyles } from '../EmployeeStatusSelect/EmployeeStatusSelect.styles';

interface SelectOption {
  translationKey: string;
  value: string;
  icon?: JSX.Element;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  withClearOption?: boolean;
  variant?: 'standard' | 'outlined';
}

export const Select = ({
  options,
  onChange,
  withClearOption,
  placeholder,
  ...restProps
}: SelectProps) => {
  const { t } = useTranslation();

  const handleOnChange = (val: SelectChangeEvent<string | null>) => {
    onChange(val.target.value ?? '');
  };

  const renderOption = (option: SelectOption, presentation = true) => {
    return (
      <MenuItem
        value={option.value}
        key={option.value}
        sx={{
          paddingLeft: presentation ? '2px' : undefined,
          ...employeeStatusSelectStyles.menuItem,
        }}
      >
        {option.icon && option.icon}
        <Typography
          sx={{
            fontSize: restProps.variant === 'standard' ? '12px' : undefined,
          }}
        >
          {t(option.translationKey)}
        </Typography>
      </MenuItem>
    );
  };

  const handleRenderValue = (value: string) => {
    if (!value) {
      return placeholder ?? t('labels.none');
    }

    const selectedOption = options.find((option) => {
      return option.value === value;
    });

    if (selectedOption) {
      return renderOption(selectedOption);
    }

    return '';
  };

  return (
    <MuiSelect
      displayEmpty
      fullWidth
      onChange={handleOnChange}
      renderValue={handleRenderValue}
      size={'small'}
      {...restProps}
    >
      {withClearOption && <MenuItem value="">{t('labels.none')}</MenuItem>}
      {options.map((option) => renderOption(option, false))}
    </MuiSelect>
  );
};
