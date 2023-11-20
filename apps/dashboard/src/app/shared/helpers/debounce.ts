let debounceTimeout: NodeJS.Timeout;

export const debounce = (callback: () => void, time: number) => {
  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    callback();
  }, time);
};
