import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function GridPage() {
  return (
    <div>
      <Head>
        <title>My styled page</title>
        <link href="/static/grid.css" rel="stylesheet" />
      </Head>
      <h1 className="test_class">
        CSS GRID WOOO
      </h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default GridPage;
