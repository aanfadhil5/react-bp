import { Button, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from '../theme';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';

const ErrorFallback = () => (
  <div>
    <p>Something went wrong, please try again later.</p>
    <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
  </div>
);

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <MantineProvider theme={theme}>
    <React.Suspense fallback={<div>loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Notifications />
          <Router>{children}</Router>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  </MantineProvider>
);
