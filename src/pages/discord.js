import React, { useEffect } from 'react';

export default function CustomPage() {
  useEffect(() => {
    window.location.href = 'https://discord.gg/73QYEuaF78';
  }, []);

  return <div>Redirecting...</div>;
}
