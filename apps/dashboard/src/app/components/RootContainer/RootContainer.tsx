import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { NavBar } from '../NavBar';

interface RootContainerProps {
  children: ReactNode;
}

export const RootContainer = ({ children }: RootContainerProps) => {
  return (
    <Container maxWidth={'xl'} disableGutters>
      <NavBar />
      {children}
    </Container>
  );
};
