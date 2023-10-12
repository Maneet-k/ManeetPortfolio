import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext();
export function useThemeContext() {
  return useContext(ThemeContext);
}


export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light');
    });
    setLoading(false);
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
    setLoading(false);

  };

  // Provide the context value as an object
  return (
    <ThemeContext.Provider value={{themeName,
      toggleTheme}}>
      {!loading && children}
    </ThemeContext.Provider>
  );
};

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
