import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: false },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">navbar</AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
