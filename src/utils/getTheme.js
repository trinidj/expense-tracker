export const getTheme = (isDarkMode) => {
  const savedTheme = localStorage.getItem('darkMode');
  let themeValue;

  if (savedTheme !== null && savedTheme !== 'undefined') {
    try {
      themeValue = JSON.parse(savedTheme);
    } catch (error) {
      themeValue = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  } else {
    themeValue = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (isDarkMode && typeof isDarkMode === 'object' && 'value' in isDarkMode) {
    isDarkMode.value = themeValue;
  }
  
  if (themeValue) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};