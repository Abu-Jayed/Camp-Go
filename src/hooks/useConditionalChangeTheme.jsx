import { useEffect } from 'react';

const useConditionalChangeTheme = (theme) => {
  useEffect(() => {
    if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);
};

export default useConditionalChangeTheme;