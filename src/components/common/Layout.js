/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

import 'typeface-roboto'
import Navbar from '../navbar/Navbar'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <div className='color-background'>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
