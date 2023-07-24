import * as React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'
import MainLayout from '../layouts'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <MainLayout openDownloadCTAClick={() => console.log('hello')}>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
          width: '100vw',
        }}
      >
        <h1>Coming Soon...</h1>
      </main>
    </MainLayout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
