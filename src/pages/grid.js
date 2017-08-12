import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function GridPage() {
  return (
    <div className="grid">
      <Head>
        <title>My styled page</title>
        <link href="/static/grid.css" rel="stylesheet" />
      </Head>
      <div className="header">Box 1</div>
      <div>Box 2</div>
      <div>Box 3</div>
      <div>Box 4</div>
      <div>Box 5</div>
      <div>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    </div>
  );
}

export default GridPage;
