using System;
using System.Collections.Generic;


namespace sortProgram
{
    internal abstract class Utils
    {
        public static List<int> GetAllInts(List<string> lines)
        {
            List<int> ints = new List<int>();
            foreach (string line in lines)
            {
                try
                {
                    ints.Add(int.Parse(line));
                }
                catch (Exception) { }
            }
            return ints;
        }
        public static List<string> GetAllStrings(List<string> lines)
        {
            List<string> strings = new List<string>();
            foreach (string line in lines)
            {
                try
                {
                    int.Parse(line);
                }
                catch (Exception)
                {
                    strings.Add(line);
                }
            }
            return strings;
        }


        public static int CheckForFormat(List<string> lines)
        {
            // The return will be 0 if the formating is invalid,
            // 1 if it contains all ints,
            // 2 if it contains all strings,
            // 3 if both

            int type = -1;

            // Check it so the lines are not empty
            if (lines.Count<=0)
            {
                return 0;
            }

            // Check if its all ints or strings
            if (type != 0)
            {
                type = 1;
                foreach (string line in lines)
                {
                    try
                    {
                        int.Parse(line);
                    }
                    catch (Exception)
                    {
                        type = 2;
                    }
                }
            }


            // Check if it has both
            if (type == 2)
            {
                foreach (string line in lines)
                {
                    try
                    {
                        Int32.Parse(line);
                        type = 3;
                    }
                    catch (Exception) { }
                }
            }


            return type;
        }
    }
}
