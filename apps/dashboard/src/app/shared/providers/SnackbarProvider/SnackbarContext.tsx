import { createContext } from 'react';
import { SnackbarProvider } from './@types/SnackbarTypes';

export const SnackbarContext = createContext<SnackbarProvider>({
  open: () => {
    return null;
  },
});
