import * as React from 'react';

import { Head } from '@/components/Head';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => (
  <>
    <Head title={title} />
    {children}
  </>
);
