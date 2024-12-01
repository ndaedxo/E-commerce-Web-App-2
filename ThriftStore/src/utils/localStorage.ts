// Local Storage Utilities
export const localStorageUtil = {
    setItem: (key: string, value: any): void => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key: string): any | null => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    },
    removeItem: (key: string): void => {
      window.localStorage.removeItem(key);
    },
  };
  