import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1068,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#109CF2',
      dark: '#0A8CEA',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
        containedPrimary: {
          color: '#fff',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 17px -4px rgba(222, 221, 221, 1)',
          '&:hover': {
            boxShadow: '0px 13px 24px -4px rgba(152, 219, 232, 1)',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        standard: {
          paddingTop: '0px',
          paddingBottom: '0px',
          p: {
            fontSize: '12px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          '& fieldset': { border: 'none' },
          '.MuiInputBase-inputAdornedStart': {
            paddingLeft: '10px',
          },
          '.MuiSvgIcon-root': {
            color: grey[400],
          },
        },
      },
    },
  },
});
