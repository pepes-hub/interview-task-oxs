import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { NavBar } from '../NavBar';
import { rootContainerStyles } from './RootContainer.styles';

interface RootContainerProps {
  children: ReactNode;
}

export const RootContainer = ({ children }: RootContainerProps) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={rootContainerStyles.container}
    >
      <NavBar />
      <Box sx={rootContainerStyles.content}>{children}</Box>
    </Container>
  );
};
