import React from 'react';
import Link from 'next/link';

function IndexPage() {
  return (
    <div>
      <h1>
        Hello World
      </h1>
      <Link href="/grid">
        <a>CSS GRID?!</a>
      </Link>
    </div>
  );
}

export default IndexPage;
