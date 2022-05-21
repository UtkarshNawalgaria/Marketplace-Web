import Header from './Header'
import {PropsWithChildren} from 'react'
import Footer from './Footer'

function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout