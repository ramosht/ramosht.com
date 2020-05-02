import React, { useState, useEffect } from 'react';
import * as S from './styled';

const ThemeToggle = () => {
  const [ theme, setTheme ] = useState(null);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, [])

  return (
    <S.ThemeToggleWrapper 
      onClick={() => {
        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
      }} 
    >
      <S.ThemeToggleIcon>☀️</S.ThemeToggleIcon>
      <S.ThemeToggleBullet selected={ theme } />
      <S.ThemeToggleIcon>🌙</S.ThemeToggleIcon>
    </S.ThemeToggleWrapper>
  )
}

export default ThemeToggle;