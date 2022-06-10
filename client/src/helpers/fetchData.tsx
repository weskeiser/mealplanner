const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const fetchData = (url: string, callback: any, options?: object) => {
  return fetch(url, { ...DEFAULT_OPTIONS, ...options })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(callback);
};

export default fetchData;
