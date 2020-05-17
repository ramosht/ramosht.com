import React from 'react'
import * as S from './styled'
import links from './content'

export default function MenuLinks() {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={link.label}>
            <S.MenuLinksLink activeClassName="active" to={link.url}>{link.label}</S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}