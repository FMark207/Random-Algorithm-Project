import { useRef } from "react";
import "./Paragraph.css";
import placeholder from "./placeholder.svg";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Paragraph(props) {
  const descBtnRef = useRef(null);
  const codeBtnRef = useRef(null);
  const descTabRef = useRef(null);
  const codeTabRef = useRef(null);

  const switcToDesc = () => {
    descBtnRef.current.classList.add("active");
    codeBtnRef.current.classList.remove("active");

    descTabRef.current.style.display = "flex";
    codeTabRef.current.style.display = "none";
  };

  const switcToCode = () => {
    descBtnRef.current.classList.remove("active");
    codeBtnRef.current.classList.add("active");

    descTabRef.current.style.display = "none";
    codeTabRef.current.style.display = "flex";
  };

  let codeString = `// Maximum choice sorting, it works by going
//over every value in the list, and comparing them to the first one.
public List<int> SortInts(List<int> old_lines)
{
  for (int i = old_lines.Count-1; i > 0; i--) {
    int max = 0;
    for (int j = 0; j <= i; j++)
    {
      if (old_lines[max] < old_lines[j])
      {
       max = j;
      }
      (old_lines[i], old_lines[max]) = (old_lines[max], old_lines[i]);
    }
}
return old_lines;
  `;

if (parseInt(props.disp) == 2) {
  codeString = `// Also maximum choice sorting but now with strings.
public List<string> SortStrings(List<string> old_lines) 
{
for (int i = old_lines.Count - 1; i > 0; i--)
{
  int max = 0;
  for (int j = 0; j <= i; j++) 
  {
    for (int k = 0; k < old_lines[max].Count() && k < old_lines[j].Count(); k++) // This for loop is used to see if one is bigger alphabetically than the other. 
    {
      if (Convert.ToInt32(old_lines[max].ToLower()[k]) < Convert.ToInt32(old_lines[j].ToLower()[k]))
      {
        max = j;
      }
      else if (Convert.ToInt32(old_lines[max].ToLower()[k]) != Convert.ToInt32(old_lines[j].ToLower()[k]))
      {
        break;
      }
    }
                    
    (old_lines[i], old_lines[max]) = (old_lines[max], old_lines[i]);
  }
}

return old_lines;
}`
}else if (parseInt(props.disp) == 3){
  codeString = `
/*
Quick sort is a divide-and-conquer sorting algorithm
that works by selecting a pivot element from the array,
partitioning the array into two subarrays,
and then recursively sorting the subarrays.
*/
public List<int> QuickSortInts(List<int> array, int leftIndex, int rightIndex)
  {
    var i = leftIndex;
    var j = rightIndex;
    var pivot = array[(leftIndex + rightIndex) / 2];
    // Choose the middle element as pivot to avoid worst-case scenarios
    while (i <= j)
    {
      while (array[i] < pivot) 
        {
          i++;
        }

        while (array[j] > pivot)
        {
          j--;
        }

        if (i > j) continue;
        // Swap elements at i and j
        (array[i], array[j]) = (array[j], array[i]);
        i++;
        j--;
        }

        // Recursively apply the same logic to the left and right parts
        if (leftIndex < j)
          QuickSortInts(array, leftIndex, j);
          if (i < rightIndex)
            QuickSortInts(array, i, rightIndex);
          return array;
  }`
}
else if (parseInt(props.disp) == 4){
  codeString=`// This is quick sort as well, but this is for strings.
// Unlike the first string sort this uses string.Compare,
// a built-in method of C# to determine the ored of the strings. 
//public List<string> QuickSortStrings
//(List<string> array, int leftIndex, int rightIndex)
{
  var i = leftIndex;
  var j = rightIndex;
  var pivot = array[(leftIndex + rightIndex) / 2];
   // Choose the middle element as pivot to avoid worst-case scenarios

  while (i <= j)
  {
    while (string.Compare(array[i], pivot) < 0)
     // Compare whole strings lexicographically
    {
      i++;
    }

    while (string.Compare(array[j], pivot) > 0)
    {
      j--;
    }

    if (i > j) continue;
    // Swap elements at i and j
    (array[i], array[j]) = (array[j], array[i]);
    i++;
    j--;
  }

  // Recursively apply the same logic to the left and right parts
  if (leftIndex < j)
    QuickSortStrings(array, leftIndex, j);
  if (i < rightIndex)
    QuickSortStrings(array, i, rightIndex);

  return array;`
}

  return (
    <div className="paragraph">
      <div className="tab">
        <div className="tab-head">
          <div className="tab-btns">
            <button
              className="desc-tab active"
              id="desc"
              ref={descBtnRef}
              onClick={switcToDesc}
            >
              Description
            </button>
            <button
              className="code-tab"
              id="code"
              ref={codeBtnRef}
              onClick={switcToCode}
            >
              Code
            </button>
          </div>
        </div>

        <div className="tab-desc" ref={descTabRef} style={{ display: "flex" }}>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <p>{props.eff}</p>
        </div>

        <div className="tab-code" ref={codeTabRef} style={{ display: "none" }}>
          <SyntaxHighlighter language="csharp">
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>

      <img
        src={props.source || placeholder}
        alt="algorithm display"
        className="alg-display"
      />
    </div>
  );
}