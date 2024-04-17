import './searchBar.scss';
import { useState } from 'react';
const SearchBar = () => {
  const types = ['Buy', 'Rent'];
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type: type }));
  };

  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map((type, id) => (
          <button
            key={id}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type='text' name='location' placeholder='City Location' />
        <input
          type='number'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Min Price'
        />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
        />
        <button>
          <img src='/search.png' alt='' />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
