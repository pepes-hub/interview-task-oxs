import { ReactNode } from 'react';
import { Container, Box } from '@mui/material';
import { pageWrapperStyles } from './PageWrapper.styles';

interface PageWrapperProps {
  children: ReactNode;
}
export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box sx={pageWrapperStyles.container}>
      <Container maxWidth={'lg'}>{children}</Container>
    </Box>
  );
};
