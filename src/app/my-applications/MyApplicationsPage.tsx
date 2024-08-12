'use client';

import Link from 'next/link';
import { Container, List, ListItem, Title } from '@mantine/core';

const applications = [
  { id: '1', name: 'Application One' },
  { id: '2', name: 'Application Two' },
  { id: '3', name: 'Application Three' },
];

export default function MyApplicationsPage() {
  return (
    <Container>
      <Title order={1}>My Applications</Title>
      <List>
        {applications.map((application) => (
          <ListItem key={application.id}>
            <Link href={`/my-applications/${application.id}`}>
              {application.name}
            </Link>
          </ListItem>
        ))}
      </List>
      <Link href="/">Back to Home Page</Link>
    </Container>
  );
}
