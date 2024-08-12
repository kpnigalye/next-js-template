'use client';

import { useRouter } from 'next/router';

export default function ApplicationDetailPage() {
  const router = useRouter();
  const { applicationId } = router.query;

  if (!applicationId) return <p>Loading...</p>;

  return (
    <div>
      <h1>Application Details</h1>
      <p>Application ID: {applicationId}</p>
    </div>
  );
}
