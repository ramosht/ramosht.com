import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import GlobalStyle from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <aside>
        <Profile />
      </aside>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
