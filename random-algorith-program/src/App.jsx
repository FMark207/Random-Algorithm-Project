import './App.css';
import 'https://kit.fontawesome.com/3b31cb99f3.js'


function randomNum() {
  return Math.floor(Math.random() * 100);
}

function Header() {
  return(
    <div className='header'>
      <p className='header-text'>Start Learning Random Sorting Algorithms Here</p>
      <h1 className='header-title'>Sorting Algorithms. <span className='grad-text'>Learn It Quick.</span></h1>
      <button className='header-btn'>+ Get Started Now</button>
      
    </div>
  )
}

function Sorting() {
  return (
    <div className='sorting'>
      <div className='sorting-desc'>
        <h1 className='sorting-title'>Sorting Title</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi voluptate ratione eligendi, molestias at cumque voluptatem dolores! Nemo voluptate suscipit tempora, illum eos veniam. Quis optio labore est animi!</h2>
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