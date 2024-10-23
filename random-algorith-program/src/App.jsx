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
      <Tab source={placeholder} 
      title="Sorting Algorithm" 
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime ea? Soluta nesciunt, ut perferendis provident incidunt magni quia expedita suscipit qui, alias deleniti deserunt fuga illo minus doloremque dolorem!"/>
      
    </>
  );
}

export default App;