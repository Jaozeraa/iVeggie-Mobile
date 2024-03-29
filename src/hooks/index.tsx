import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/theme/defaultTheme';
import { DefaultTheme } from 'styled-components/dist/types';
import { BagContextProvider } from './bag';
import { ToastContextProvider } from './toast';
import { AuthContextProvider } from './auth';

const RootProvider: React.FC<models.DefaultComponentProps> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme as DefaultTheme}>
      <ToastContextProvider>
        <BagContextProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </BagContextProvider>
      </ToastContextProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
