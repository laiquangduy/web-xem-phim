export const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  };
  
  export const saveToLocalStorage = (key, value) => {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  };
  