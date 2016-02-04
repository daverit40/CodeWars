using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;

namespace CodeWars
{
    public class codeWars
    {
        public static long[] PrimeBefAft(long num)
        {
            // your code
            List<long> ret = new List<long>();
            // find the small prime
            for(long i = num - 1; i > 0; i--)
            {
                if(i % 2 > 0) // odd numbers only
                {
                    bool isPrime = true;
                    double sqRoot = Math.Sqrt(i);

                    for (long j = 3; j <= sqRoot; j+= 2)
                    {
                        if(i % j == 0 )
                        { isPrime = false; }
                    }

                    if(isPrime)
                    {
                        ret.Add(i);
                        break;
                    }
                }
            }

            // find the large prime
            bool foundPrime = false;
            do
            {
                bool isPrime = true;
                num++;
                double sqRoot = Math.Sqrt(num);

                if(num%2 > 0) // odd numbers only
                {
                    for (long i = 3 ; i <= sqRoot; i+=2 )
                    {
                        if(num % i == 0 )
                        { isPrime = false; }
                    }

                    if (isPrime)
                    {
                        ret.Add(num);
                        foundPrime = true;
                    }
                }

            } while (foundPrime == false);

            return ret.ToArray();
        }

        public static string BinaryToString(string binary)
        {

            List<Byte> byteList = new List<Byte>();

            for (int i = 0; i < binary.Length; i += 8)
            {
                byteList.Add(Convert.ToByte(binary.Substring(i, 8), 2));
            }
            return Encoding.ASCII.GetString(byteList.ToArray());
        }

        public static string Obfuscate(string email)
        {
            const string at = " [at] ";
            const string dot = " [dot] ";
            return email.Replace("@", at).Replace(".com", dot);
        }

        public static int[] CompoundArray(int[] a, int[] b)
        {
            // your code
            List<int> c = new List<int>();
            for (int i = 0; i < Math.Max(a.Length, b.Length); i++)
            {
                if(i < a.Length)
                {
                    c.Add(a[i]);
                }

                if (i < b.Length)
                {
                    c.Add(b[i]);
                }
            }
            return c.ToArray();
        }

        public static int maxPizza(int cut)
        {           
            return int.Parse((Math.Pow(double.Parse(cut.ToString()), 2.00)).ToString());
        }

        public static string Maskify(string cc)
        {
            System.Text.StringBuilder ret = new System.Text.StringBuilder();

            for (int i = 0; i < cc.ToCharArray().Length; i ++)
            {
                if (i < cc.ToCharArray().Length - 4)
                {
                    ret.Append('#');
                }
                else
                {
                    ret.Append(cc.ToCharArray()[i]);
                }
            }

            return ret.ToString();
        }

        public int findPattern(int n)
        {
            int gap = 0;
            bool match1 = false;
            bool match2 = false;
            int masterGap = 0;

            foreach (char digit in Convert.ToString(n, 2).ToCharArray())
            {
                if (digit.Equals('1'))
                {
                    match1 = true;

                    if (match2)
                    {   // winner winner chicken dinner
                        // mark the index of this digit and reset match 2 and 3
                        if (gap > masterGap)
                        { masterGap = gap; }
                        match2 = false;
                    }
                    gap = 0;
                }

                if (digit.Equals('0') && match1)
                {
                    match2 = true;
                    gap += 1;
                }
            }

            return masterGap;
        }

        public static int[] DeleteNth(int[] arr, int x)
        {
            var query = from int i in arr select i;

            var query2 = arr.TakeWhile((num, index) => tot(arr, num, index) <= x);
            return query2.ToArray();

        }

        public static int tot(int[] arr, int num, int idx)
        {
            int total = 0;
            for(int i = 0; i <= idx; i++)
            {
                if (int.Equals(arr[i], num))
                {
                    total++;
                }
            }

            return total;
        }

        public static int DuplicateCount(string str)
        {
            int count = 0;
            string input = str.ToLower();
            List<string> used = new List<string>();

            foreach(char s in input.ToCharArray())
            {
                if(input.Split(s).Length > 2 )
                {
                    if (! used.Contains(s.ToString()))
                    {
                        used.Add(s.ToString());
                        count++;
                    }
                }
            }
            return count;
        }
    }
}