import './App.scss';
import mobile from './images/pattern-divider-mobile.svg';
import desktop from './images/pattern-divider-desktop.svg';
import dice from './images/icon-dice.svg';
import { useState, useEffect } from 'react';

function App() {
  const [fetchData, setFetchdata] = useState([]);
  const get_advice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const jsonData = await response.json();
    // console.log(jsonData.slip);
    setFetchdata(jsonData.slip);
  };

  useEffect(() => {
    get_advice();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Advice #{fetchData.id}</h1>
        <p className="text">"{fetchData.advice}"</p>
        <img src={desktop} className="desktop" alt="desktop" />
        <img src={mobile} className="mobile" alt="mobile" />
      </div>
      <button className="btn" onClick={get_advice}>
        <img src={dice} alt="" />
      </button>

      <footer>
        <div className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="https://stk-portfolio.netlify.app/">Shuk Ting Kwong</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
