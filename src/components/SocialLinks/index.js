import React from 'react'
import Icons from './icons';
import links from './content';
import * as S from './styled';

const SocialLinks = (props) => (
    <S.SocialLinksWrapper>
        <S.SocialLinksList>
            {links.map((link, i) => {
                const Icon = Icons[link.label];

                return (
                    <S.SocialLinksItem key={i}>
                        <S.SocialLinksLink 
                            href={link.url} 
                            title={link.label} 
                            target="blank" 
                            rel="noopener noreferrer"
                            iconSize={props.iconSize}
                            iconColor={props.iconColor}
                        >
                            <Icon />
                        </S.SocialLinksLink>
                    </S.SocialLinksItem>
                )
            })}
        </S.SocialLinksList>
    </S.SocialLinksWrapper>
)

export default SocialLinks;