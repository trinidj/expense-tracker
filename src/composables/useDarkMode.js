import { ref, watch, onMounted } from 'vue'

const isDarkMode = ref(false);

export function useDarkMode() {
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('darkMode')
    let themeValue
    
    if (savedTheme !== null && savedTheme !== 'undefined') {
      try {
        themeValue = JSON.parse(savedTheme);
      } catch (error) {
        themeValue = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } else {
      themeValue = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    isDarkMode.value = themeValue;
    applyTheme(themeValue);
  }

  const applyTheme = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  }

  watch(isDarkMode, (newValue) => {
    applyTheme(newValue)
    localStorage.setItem('darkMode', JSON.stringify(newValue));
  })

  onMounted(() => {
    initializeTheme();
  });

  return {
    initializeTheme,
    toggleDarkMode
  }
}