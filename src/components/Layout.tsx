import Head from 'next/head'
import {ReactNode} from 'react'

const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE

interface LayoutProps {
  title?: string
  children: ReactNode
}

export default function Layout({title, children}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}{title && ' | '}{SITE_TITLE}</title>
      </Head>
      {children}
    </>
  )
}
