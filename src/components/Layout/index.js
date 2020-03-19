import React from "react"
import PropTypes from "prop-types"
import Aside from "../Aside"

import * as s from "./styled"

import GlobalStyle from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <s.Layout>
      <GlobalStyle />
      <Aside />
      <s.Main>
        {children}
      </s.Main>
    </s.Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
