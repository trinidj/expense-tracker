export const getTheme = (isDarkMode) => {
  const savedTheme = localStorage.getItem('darkMode');

  if (savedTheme !== null && savedTheme !== 'undefined') {
    try {
      isDarkMode.value = JSON.parse(savedTheme);
    } catch (error) {
      isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};