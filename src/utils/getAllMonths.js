export const getAllMonths = () => {
  const months = [];
  const date = new Date();

  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);    
    months.push(monthName);
  }
  
  return months;
}