export const useSnackbarProviderStyles = {
  container: {
    position: 'fixed',
    top: '24px',
    right: '24px',
    gap: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    zIndex: 10000,
  },
  snackbar: {
    position: 'unset',
    left: 0,
    right: 0,
    transform: 'none',
  },
  content: {
    fontWeight: 500,
    padding: '6px 36px',
    boxShadow: '0 0 5px -2px rgb(0 0 0 / 21%)',
  },
};
