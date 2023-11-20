import {
  Select as MuiSelect,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface SelectOption {
  translationKey: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  withClearOption?: boolean;
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

  const handleRenderValue = (value: string) => {
    if (!value) {
      return placeholder ?? t('labels.none');
    }

    const selectedOption = options.find((option) => {
      return option.value === value;
    });

    return t(selectedOption?.translationKey ?? '');
  };

  return (
    <MuiSelect
      displayEmpty
      fullWidth
      onChange={handleOnChange}
      renderValue={handleRenderValue}
      {...restProps}
    >
      {withClearOption && <MenuItem value="">{t('labels.none')}</MenuItem>}
      {options.map((option) => {
        return (
          <MenuItem value={option.value} key={option.value}>
            {t(option.translationKey)}
          </MenuItem>
        );
      })}
    </MuiSelect>
  );
};
