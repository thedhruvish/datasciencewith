import React, { useEffect } from 'react';

export default function CustomPage() {
  useEffect(() => {
    window.location.href = 'https://www.linkedin.com/in/thedhruvish';
  }, []);

  return <div>Redirecting...</div>;
}
