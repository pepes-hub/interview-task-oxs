import React from 'react';

export interface SnackbarProviderOptions {
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

export interface SnackbarProvider {
  open: (options: SnackbarProviderOptions) => void;
}

export interface SnackbarItem {
  snackbar: React.ReactNode;
  id: string;
}
