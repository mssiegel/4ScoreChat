/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import 'typeface-roboto'
import Header from "./Header"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <>
    <div className="color-background">
      <Header/>
      <main>{children}</main>
    </div>
    </>
    
  )
}

export default Layout
