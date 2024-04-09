import {useEffect, useState} from 'react';
import movieSDK from '../../src/sdks/movieSdk';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const resp = await movieSDK.getRandomMovies();
    if (resp.description) {
      setMovies(resp.description);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log('this is movies', movies);

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{fontSize: 38, marginBottom: 12}}>Movies List</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {movies &&
            movies.map((movie, index) => {
              return (
                <div key={index} style={styles.container}>
                  <img
                    src={movie['#IMG_POSTER']}
                    style={styles.image}
                    alt={movie['#TITLE']}
                  />
                  <div style={styles.title}>{movie['#TITLE']}</div>
                  <div style={styles.info}>{movie['#YEAR']}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    margin: 5,
    padding: 10,
    minWidth: 500,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 32,
    color: '#e62d2d',
    fontWeight: 'bold',
  },
  info: {fontSize: 18, color: '#efeeee'},
};

export default App;
