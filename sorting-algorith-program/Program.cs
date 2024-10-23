using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;


namespace sortProgram
{
    internal class Program
    {
        private static List<string> lines = new List<string>();
        static void Main(string[] args)
        {

            // Get the path to the file
            Console.WriteLine("Input the files path!");
            string path = Console.ReadLine();
            if (File.Exists(path))
            {
                // Get the lines from the file
                foreach (var line in File.ReadAllLines(path))
                {
                    lines = line.Split(';').ToList<string>();
                    lines.Remove("");
                }
            }
            else
            {
                // Handle the exeption for the invalid path
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Invalid! File doesn't exist, or the program can't see it.");
                Console.ForegroundColor = ConsoleColor.White;
                return;
            }

            // Get the input for the order of the sort
            Console.WriteLine("\nDo you want the order to be ascending or descending (a/d)?");
            bool is_reversed = Console.ReadLine().ToLower()[0] == 'd';

            // Get the input for the type of the sort
            Console.WriteLine("\nDo you want to use Quick sort of Maximum choice sort? (q/m)?");
            bool is_quick = Console.ReadLine().ToLower()[0] == 'q';

            // Check for the content of the file
            int format = Utils.CheckForFormat(lines);


            if (format == 0)
            {
                Console.WriteLine("The file is empty or contains invalid!");
                return;
            }
            else if (format == 1)
            {
                

                List<int> sorted = new List<int>();
                if (is_quick)
                {
                    sorted = new Sorts().QuickSortInts(Utils.GetAllInts(lines), 0, lines.Count - 1);
                }
                else
                {
                    sorted = new Sorts().SortInts(Utils.GetAllInts(lines));
                }

                // Reverse the oreder if needed
                if (is_reversed) sorted.Reverse();

                string int_lines = "";
                foreach (int line in sorted)
                {
                    int_lines += line.ToString() + ";";
                }

                File.WriteAllLines(path, new []{int_lines} );
            }
            else if (format == 2)
            {
                List<string> sorted = new List<string>();
                if (is_quick)
                {
                    sorted = new Sorts().QuickSortStrings(Utils.GetAllStrings(lines),0,lines.Count-1);
                }
                else
                {
                    sorted = new Sorts().SortStrings(Utils.GetAllStrings(lines));
                }

                // Reverse the oreder if needed
                if (is_reversed) sorted.Reverse();

                string string_lines = "";
                foreach (string line in sorted)
                {
                    string_lines += line.ToString() + ";";
                }

                File.WriteAllLines(path, new []{string_lines} );
            }
            else if (format == 3)
            {

                List<string> int_lines = new List<string>();
                if (is_quick)
                {
                    foreach (int line in new Sorts().QuickSortInts(Utils.GetAllInts(lines), 0, lines.Count - 1))
                    {
                        int_lines.Add(line.ToString());
                    }
                }
                else
                {
                    foreach (int line in new Sorts().SortInts(Utils.GetAllInts(lines)))
                    {
                        int_lines.Add(line.ToString());
                    }
                }

                List<string> string_lines = new List<string>();
                if (is_quick)
                {
                    string_lines = new Sorts().QuickSortStrings(Utils.GetAllStrings(lines), 0, lines.Count - 1);
                }
                else
                {
                    string_lines = new Sorts().SortStrings(Utils.GetAllStrings(lines));
                }

                int_lines.AddRange(string_lines);

                // Reverse the oreder if needed
                if (is_reversed) int_lines.Reverse();

                string final = "";
                foreach (string line in int_lines)
                {
                    final += line + ";";
                }

                File.WriteAllLines(path, new []{final} );
            }
        }


        
    }
}
