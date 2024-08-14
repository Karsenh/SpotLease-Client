import React, {ReactNode, createContext, useContext, useState} from 'react';

import {darkTheme} from './themes/dark';
import {lightTheme} from './themes/light';

type TTheme = 'light' | 'dark';

const themeContextValue = {
  light: lightTheme,
  dark: darkTheme,
};

const ThemeContext = createContext<{theme: typeof lightTheme}>({
  theme: lightTheme,
});

function ThemeProvider({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState<TTheme>('light');

  return (
    <ThemeContext.Provider value={{theme: themeContextValue[theme]}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export {ThemeProvider};
