import '../css/GifList.css';
import GifCard from '../Container/GifCard';

const GifList = ({ gifs }) => {
  const giphys = gifs.map((gif) => {
    return <GifCard key={gif.id} gif={gif} />;
  });
  return <div className='giphy-container'>{giphys}</div>;
};

export default GifList;
