import Header from './Header'
import {PropsWithChildren} from 'react'

function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
    </>
  )
}

export default Layout