import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

function Default({children}: Props) {
  return (
    <>
        <Navbar />

        <main className={`relative`}>
            {children}
        </main>

        <Footer />
    </>
  )
}

export default Default