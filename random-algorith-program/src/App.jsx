import logo from './logo.svg';
import './App.css';
import GistEmbed from './GistEmbed.jsx';
import 'https://kit.fontawesome.com/3b31cb99f3.js'

function randomNum() {
  return Math.floor(Math.random() * 10);
}

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Random Number Sorting</h1>
      <h1 className="header-display-array">[{randomNum()},{randomNum()},{randomNum()},{randomNum()}]</h1>
      <button className="interactive-button" onClick={() => {
        let numArray = document.querySelector(".header-display-array");
        numArray.innerText = `[${randomNum()},${randomNum()},${randomNum()},${randomNum()}]`;
      }}>
        Regenerate <i className="fa-solid fa-arrows-spin spinning-arrow"></i>
      </button>
    </div>
  );
}

function Sorting() {
  return (
    <div className='sorting'>
      <div className='sorting-desc'>
        <h1>Sorting Title</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi voluptate ratione eligendi, molestias at cumque voluptatem dolores! Nemo voluptate suscipit tempora, illum eos veniam. Quis optio labore est animi!</h2>
      </div>
      <div className='display-code'>
        <GistEmbed gistId={"18e48f53c34098554cd339926cb2bc0f"}></GistEmbed>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Sorting />
    </>
  );
}

export default App;