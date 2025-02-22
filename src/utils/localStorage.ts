export const loadFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  
  return item ? (JSON.parse(item) as T) : null;
};

export const saveToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
