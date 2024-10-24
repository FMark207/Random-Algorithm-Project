using System;
using System.Collections.Generic;
using System.Linq;


namespace sortProgram
{
    internal class Sorts
    {
        

        // Maximum choice sorting, it works by going over every value in the list, and comparing them to the first one.
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
        }
        
        // Also maximum choice sorting but now with strings.
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
        }

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
            var pivot = array[leftIndex];
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
        }


        // This is quick sort as well, but this is for strings.
        // Unlike the first string sort this uses string.Compare, a built-in method of C# to determine the ored of the strings. 
        public List<string> QuickSortStrings(List<string> array, int leftIndex, int rightIndex)
        {
            var i = leftIndex;
            var j = rightIndex;
            var pivot = array[(leftIndex + rightIndex) / 2]; // Choose the middle element as pivot to avoid worst-case scenarios

            while (i <= j)
            {
                while (string.Compare(array[i], pivot) < 0) // Compare whole strings lexicographically
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

            return array;
        }
        
    }
}
