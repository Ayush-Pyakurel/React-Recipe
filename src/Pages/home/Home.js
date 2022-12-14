//styles
import './Home.css';

//import firestore

//import hooks
import { useState, useEffect } from 'react';

//component import
import RecipeList from '../../Component/RecipeList';
import { projectFirestore } from '../../firebase/config';

//custome hooks import
//import { useFetch } from '../../hooks/useFetch';

const Home = () => {
  // now we are using firestore to fetch the data so useFetch custome hook is not required
  //const { data, loading, error } = useFetch('http://localhost:3000/recipes');

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    //accessing the database collection form firebase
    //fetching data is asynchronous task; so it returns promise, that is why .then() and it return a function which takes snapshot(snapshot of the collection) as the argument
    const unsubscribe = projectFirestore.collection('recipes').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No recipe to load');
          setLoading(false);
        } else {
          let result = [];
          snapshot.docs.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data() });
          });
          setData(result);
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    //unsubsribing the event listener onSnapshot()
    return () => unsubscribe();
  }, []);

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='loading'>Loading....!!</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
