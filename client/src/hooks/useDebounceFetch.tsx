import useDebounce from './useDebounce';

const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const useDebounceFetch = (
  url: string,
  callback: any,
  dependencies: Array<string> | [],
  delay: number,
  options?: object
): void => {
  useDebounce(
    () =>
      fetch(url, { ...DEFAULT_OPTIONS, ...options })
        .then((res) => {
          if (res.ok) return res.json();
          return res.json().then((json) => Promise.reject(json));
        })
        .then(callback),
    delay,
    dependencies
  );
};

export default useDebounceFetch;
