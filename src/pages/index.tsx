import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <Head>
        <title>Bounty Details App</title>
        <meta name="description" content="Demo bounty details page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Bounty Details App</h1>
        <p className="text-gray-300 mb-6">
          This is a demo of the bounty details page matching the design from your screenshot.
        </p>
        <Link 
          href="/bounty/1"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
        >
          View Demo Bounty
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
