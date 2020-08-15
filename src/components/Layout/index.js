import React, {useState} from "react"
import {useMediaQuery} from 'react-responsive'

import PropTypes from "prop-types"
import Aside from "../Aside"
import LayoutHeaderMobile from "../LayoutHeaderMobile"
import LayoutToolbarMobile from '../LayoutToolbarMobile'

import GlobalStyle from "../../styles/global"
import * as s from "./styled"


const Layout = ({ children }) => {
  const [ asideState, setAsideState ] = useState(false);
  const isMobile = useMediaQuery({query: '(max-width: 767px)'});

  return (
    <s.Layout>
      <GlobalStyle />
      
      {isMobile && <LayoutHeaderMobile asideState={asideState} />}

      <Aside asideState={asideState} />
      
      <s.Main>
        {children}
      </s.Main>

      {isMobile && <LayoutToolbarMobile setAsideState={setAsideState} asideState={asideState} />}

    </s.Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
