import './App.css';
import 'https://kit.fontawesome.com/3b31cb99f3.js'
import Header from './components/Header_Comp/Header';
import Cards from './components/Cards_Comp/cards';
import placeholder from "./components/Paragraph_Comp/placeholder.svg"
import Tab from './components/Paragraph_Comp/Paragraph';

function App() {
  return (
    <>
      <Header />
      <Cards />
      <Tab source={placeholder}/>
    </>
  );
}

export default App;