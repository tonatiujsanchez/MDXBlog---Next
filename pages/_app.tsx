import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress color="#000000" height={4} />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp



// Instalaciones
  // - gray-matter
  // - mdx-prism
  // - reading-time
  // - next-mdx-remote
  // - remark-slug
  // - remark-autolink-headings
  // - remark-code-titles
  // - rehype