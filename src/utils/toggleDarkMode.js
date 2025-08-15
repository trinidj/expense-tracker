export const toggleDarkMode = (isDarkMode) => {    
  isDarkMode.value = !isDarkMode.value;
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value));
}