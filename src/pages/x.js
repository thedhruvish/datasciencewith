import React, { useEffect } from 'react';

export default function CustomPage() {
  useEffect(() => {
    window.location.href = 'https://x.com/thedhruvish';
  }, []);

  return <div>Redirecting......</div>;
}
