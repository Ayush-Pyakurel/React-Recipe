import { useState, useEffet } from 'react';

//function accept url as argument to make it dynamic
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffet(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(() => json);
    };

    fetchData();

    //passing url as the dependency array because; url is the only value that might change over time; in that case the component should re-evaluate to consume and update the new state
  }, [url]);

  //cusotme hook always return some value/date; can return array, object
  return { data };
};

export default useFetch;
