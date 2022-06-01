import './App.css';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import MovieDetails from './components/MovieDetails';

function App({movieData}) {
  console.log(movieData)

const [index, setIndex] = useState(0)

  return (
    <div>
      <h1 >Movie Viewer</h1>
      <div className="App">
      
      <Sidebar index={index} setIndex={setIndex} movieData={movieData} />
      <MovieDetails setIndex={setIndex} index={index} movieData={movieData} />
      </div>
    </div>
  );
}

export default App;
