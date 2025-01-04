'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes';

/**
 * Custom ThemeProvider component that wraps NextThemesProvider.
 * @param {ThemeProviderProps} props - Props passed to the ThemeProvider.
 * @returns Themed application context.
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
