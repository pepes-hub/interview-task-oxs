import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { navBarStyles } from './NavBar.styles';

export const NavBar = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar sx={navBarStyles.container}>
        <Typography variant="h5" component="div" sx={navBarStyles.title}>
          {t('labels.employees')}
        </Typography>
        <Button size={'small'} variant={'outlined'} sx={navBarStyles.button}>
          {t('actions.logOut')}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
