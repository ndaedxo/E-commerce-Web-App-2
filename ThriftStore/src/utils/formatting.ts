// Formatting Utilities
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  };
  
  export const formatDate = (date: string | Date): string => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  export const truncateString = (str: string, maxLength: number): string => {
    return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
  };
  