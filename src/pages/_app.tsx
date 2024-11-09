// src/pages/_app.tsx

import '../app/globals.css'; // Correct path to Tailwind CSS

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
