import React, { useState, useEffect } from 'react';
import * as S from './styled';

const ThemeToggle = () => {
  const [ theme, setTheme ] = useState('light');

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, [])

  useEffect(() => {
    window.__setPreferredTheme(theme);
  }, [theme])

  return (
    <S.ThemeToggleWrapper 
      onClick={() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
      }} 
    >
      <S.ThemeToggleIcon>☀️</S.ThemeToggleIcon>
      <S.ThemeToggleBullet selected={ theme } />
      <S.ThemeToggleIcon>🌙</S.ThemeToggleIcon>
    </S.ThemeToggleWrapper>
  )
}

export default ThemeToggle;