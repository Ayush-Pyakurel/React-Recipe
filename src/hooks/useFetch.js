import { useState, useEffect } from 'react';

//function accept url as argument to make it dynamic
export const useFetch = (url, method = 'GET') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postInformation, setPostInformation] = useState(null);

  //function to return from the useFetch hook
  const postData = (postData) => {
    setPostInformation({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    //abortController is used to unsubcribe the fetch stream after the component unmounts
    const controller = new AbortController();
    const fetchData = async (fetchOption) => {
      setLoading(() => true);
      try {
        const response = await fetch(url, {
          ...fetchOption,
          signal: controller.signal,
        });
        const json = await response.json();
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        setLoading(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch was aborted!!');
        } else {
          setLoading(false);
          setError('Could not fetch the data!!');
        }

        //console.log(err);
      }
    };

    //condition to check wheather the HTTP method is GET or POST
    if (method === 'GET') {
      //everytime url or API end point changes; component get re-evaluated, to run the fetch function after change in state it should be invoked inside the useEffect
      fetchData();
    }

    //condition to check wheather the HTTP method is GET or POST
    if (method === 'POST' && postInformation) {
      fetchData(postInformation);
    }

    //clean up function for useEffect to avoid memory leak
    return () => {
      controller.abort();
    };

    //passing url as the dependency array because; url is the only value that might change over time; in that case the component should re-evaluate to consume and update the new state
  }, [url, postInformation, method]);

  //cusotme hook always return some value/date; can return array, object
  return { data, loading, error, postData };
};
