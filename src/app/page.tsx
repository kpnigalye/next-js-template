'use client';

import Link from 'next/link';
import { Container, Title } from '@mantine/core';

function HomePage() {
  return (
    <Container>
      <Title order={1}>Welcome to the Portal</Title>
      <Link href="/my-applications">My Applications</Link>
    </Container>
  );
}

export default HomePage;
