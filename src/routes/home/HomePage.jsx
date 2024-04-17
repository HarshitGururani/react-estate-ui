import SearchBar from '../searchBar/SearchBar';
import './homepage.scss';
const HomePage = () => {
  return (
    <main className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            voluptatibus neque voluptates maiores quasi quod veniam odit.
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className='box'>
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imageContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </main>
  );
};
export default HomePage;
