import './App.css';
import 'https://kit.fontawesome.com/3b31cb99f3.js'
import Header from './components/Header_Comp/Header';
import Cards from './components/Cards_Comp/cards';
import placeholder from "./components/Paragraph_Comp/placeholder.svg"
import quickStringSort from "./quickStringSort.png"
import quickIntSort from "./Qintsort.gif"
import intSort from "./intsort.gif"
import Tab from './components/Paragraph_Comp/Paragraph';
import stringSort from "./stringSort.png"
import { useRef } from "react";



function App() {
  const resultRef = useRef(null);
  return (

    
    <> 
      <Header resultRef={resultRef}/>
      <Cards ref={resultRef}/>
      <Tab source={intSort} 
      title="Int Sorting"
      desc="The basic idea behind sorting is to compare integers in a list and rearrange them based on their value. For example, in ascending order, smaller numbers will appear before larger numbers, while in descending order, larger numbers will appear first."
      eff="Bubble Sort, Selection Sort, and Insertion Sort are simpler algorithms, often used in educational contexts or for small datasets due to their intuitive nature and simplicity. However, they are generally not efficient for large datasets due to their quadratic time complexity."
      disp="1"
      />
      <Tab source={stringSort} 
      title="String Sorting"
      desc="String sorting works by comparing the characters of strings based on their Unicode (or ASCII) values. It arranges the strings in an order determined by these character values, typically in lexicographical (dictionary) order."
      eff="For small datasets, simpler algorithms like Bubble Sort or Insertion Sort may perform reasonably well, since the overhead of more complex algorithms like QuickSort or MergeSort might not be worth the extra implementation."
      disp="2"
      />
      <Tab source={quickIntSort} 
      title="Quick Int Sorting"
      desc="Quick integer sorting, or QuickSort, is a fast, efficient sorting algorithm used to sort a list of integers. It is based on the divide-and-conquer principle, where the list is divided into smaller sublists around a 'pivot' element."
      eff="QuickSort has an average time complexity of O(n log n), but in the worst case (when the pivot is poorly chosen), it can degrade to O(n²). It is often preferred due to its efficient use of memory (in-place sorting) and generally fast performance for most datasets."
      disp="3"
      />
      <Tab source={quickStringSort} 
      title="Quick String Sorting"
      desc="The basic idea behind sorting is to compare integers in a list and rearrange them based on their value. For example, in ascending order, smaller numbers will appear before larger numbers, while in descending order, larger numbers will appear first."
      eff="Bubble Sort, Selection Sort, and Insertion Sort are simpler algorithms, often used in educational contexts or for small datasets due to their intuitive nature and simplicity. However, they are generally not efficient for large datasets due to their quadratic time complexity."
      disp="4"
      />
      
    </>
  );
}

export default App;