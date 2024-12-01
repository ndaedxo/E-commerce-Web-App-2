// Date and Time Utilities
export const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  
  export const differenceInDays = (startDate: Date, endDate: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const diffInTime = endDate.getTime() - startDate.getTime();
    return Math.round(diffInTime / oneDay);
  };
  
  // Add other date and time utilities as needed
  