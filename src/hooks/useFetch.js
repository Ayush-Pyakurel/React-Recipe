import { useState, useEffect } from 'react';

//function accept url as argument to make it dynamic
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      //abortController is used to unsubcribe the fetch stream after the component unmounts

      setLoading(() => true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        const json = await response.json();
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        setLoading(() => false);
        setData(() => json);
        setError(() => null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch was aborted!!');
        } else {
          setLoading(() => false);
          setError(() => 'Could not fetch the data!!');
        }

        //console.log(err);
      }
    };

    //everytime url or API end point changes; component get re-evaluated, to run the fetch function after change in state it should be invoked inside the useEffect
    fetchData();

    //clean up function for useEffect to avoid memory leak
    return () => {
      controller.abort();
    };

    //passing url as the dependency array because; url is the only value that might change over time; in that case the component should re-evaluate to consume and update the new state
  }, [url]);

  //cusotme hook always return some value/date; can return array, object
  return { data, loading, error };
};
