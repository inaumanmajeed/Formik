const localStorageKey = "7OEETkBTMTjXeMc"; // just a random string to avoid conflicts with other apps using localStorage for the same purpose (saving data)

export const getDataFromLocalStorage = () => {
  return new Promise((resolve) => {
    const data = localStorage.getItem(localStorageKey);
    resolve(data ? JSON.parse(data) : null);
  });
};

export const saveDataToLocalStorage = (data) => {
  return new Promise((resolve) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    resolve(data);
  });
};

export const deleteDataFromLocalStorage = () => {
  return new Promise((resolve) => {
    localStorage.removeItem(localStorageKey);
    resolve();
  });
};