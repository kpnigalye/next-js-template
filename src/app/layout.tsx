// app/layout.tsx
'use client';

import React from 'react';
import { MantineProvider } from '@mantine/core';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* Add your head elements here */}</head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
