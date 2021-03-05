import React from "react"

import { Navbar, Sidebar, Footer, Banner } from "./Complete"
import { useGlobalContext } from '../context/context'


const Layout = (props) => {
  const {closeSubmenu} = useGlobalContext()
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen)
  }

  return (
    <>
      <Navbar  isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div onFocus={closeSubmenu} style={{margin:`0 auto`,maxWidth:960,padding:`1rem 1.0875rem 1.45rem`,}} onMouseOver={closeSubmenu}>
        <main>
          <Banner title={props.title} subtitle={props.subtitle}>
            {props.bannerChildren}
          </Banner>
        {props.children}</main>
      </div>
        <Footer/>
    </>
  )
}

export default Layout
