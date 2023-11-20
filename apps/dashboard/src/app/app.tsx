import { EmployeesView } from './views/Employees';
import { RootContainer } from './shared/ui/RootContainer';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './libraries/i18n/I18n';
import { theme } from './theme/muiTheme';

export function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <RootContainer>
          <EmployeesView />
        </RootContainer>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
