import { EmployeesView } from './views/Employees';
import { RootContainer } from './shared/ui/RootContainer';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './libraries/i18n/I18n';
import { theme } from './theme/muiTheme';
import { SnackbarProvider } from './shared/providers/SnackbarProvider';

export function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <RootContainer>
            <EmployeesView />
          </RootContainer>
        </SnackbarProvider>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
