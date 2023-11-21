import React, { useRef, useState } from 'react';
import { SnackbarItem, SnackbarProviderOptions } from './@types/SnackbarTypes';
import { SnackbarContext } from './SnackbarContext';
import { Alert, Box, Snackbar } from '@mui/material';
import { useSnackbarProviderStyles } from './SnackbarProvider.styles';
import { uniqueId } from '../../helpers/uniqueId';

interface SnackbarProviderProps {
  children: React.ReactNode;
}

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const snackbarRef = useRef<SnackbarItem[]>([]);
  const [snackbars, setSnackbars] = useState<SnackbarItem[]>([]);

  const updateSnackbars = (newCollection: SnackbarItem[]) => {
    snackbarRef.current = newCollection;
    setSnackbars(newCollection);
  };

  const handleClose = (id: string) => {
    updateSnackbars(
      snackbarRef.current.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const open = ({ message, severity }: SnackbarProviderOptions) => {
    const itemId = uniqueId('snackbar');

    const closeSingleSnackbar = () => {
      handleClose(itemId);
    };

    updateSnackbars([
      ...snackbarRef.current,
      {
        id: itemId,
        snackbar: (
          <Snackbar
            key={itemId}
            autoHideDuration={4000}
            sx={useSnackbarProviderStyles.snackbar}
            onClose={closeSingleSnackbar}
            open
          >
            <Alert sx={useSnackbarProviderStyles.content} severity={severity}>
              {message}
            </Alert>
          </Snackbar>
        ),
      },
    ]);
  };

  return (
    <SnackbarContext.Provider
      value={{
        open,
      }}
    >
      {children}
      <Box sx={useSnackbarProviderStyles.container}>
        {snackbars.map((item) => {
          return item.snackbar;
        })}
      </Box>
    </SnackbarContext.Provider>
  );
};
