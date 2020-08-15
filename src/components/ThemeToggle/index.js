import React, { useState, useEffect } from 'react';
import * as S from './styled';
import {useMediaQuery} from 'react-responsive'


const ThemeToggle = () => {
  const [ theme, setTheme ] = useState(null);
  const isDarkMode = theme === 'dark';

  const isMobile = useMediaQuery({query: '(max-width: 767px)'});
  const isDesktop = useMediaQuery({query: '(min-width: 768px)'});

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, [])

  return (
    <S.ThemeToggleWrapper 
      onClick={() => {
        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');

        if (window.DISQUS !== undefined) {
          window.setTimeout(() => {
            window.DISQUS.reset({
              reload: true
            })
          }, 300)
        }
      }} 
    > 
      {isDesktop && 
        <>
          <S.ThemeToggleIcon className="light"><span role="img" aria-label="Tema Claro">☀️</span></S.ThemeToggleIcon>
          <S.ThemeToggleBullet selected={ theme } />
          <S.ThemeToggleIcon className="dark"><span role="img" aria-label="Tema Escuro">🌙</span></S.ThemeToggleIcon>
        </>
      }

      {isMobile &&
        <S.LightbulbIcon size={24} />
      }
    </S.ThemeToggleWrapper>
  )
}

export default ThemeToggle;