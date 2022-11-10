import { useState, useEffet } from 'react';

//function accept url as argument to make it dynamic
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffet(() => {
    const fetchData = async () => {
      setLoading(() => true);
      const response = await fetch(url);
      const json = await response.json();

      setLoading(() => false);
      setData(() => json);
    };

    //everytime url or API end point changes; component get re-evaluated, to run the fetch function after change in state it should be invoked inside the useEffect
    fetchData();

    //passing url as the dependency array because; url is the only value that might change over time; in that case the component should re-evaluate to consume and update the new state
  }, [url]);

  //cusotme hook always return some value/date; can return array, object
  return { data };
};
