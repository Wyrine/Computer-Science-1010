/*
   File: chapter6Big.cpp
   Author: Cindy Arnold
   This program gets input and output file names from the user,
   reads numbers from the input file and write the numbers formatted
   as dollar amounts to the output file
*/

#include <iostream>
#include <cstdlib>
#include <fstream>
#include <cstring>
#include <iomanip>
using namespace std;

bool openFile( ifstream& );

double readNum( ifstream& );
void writeNum( ofstream&, double );

const int MAX_FILENAME = 256;

int main()
{
   double num;
   ifstream input;
   ofstream output;

   // get input file name, open it and make sure it exists
   if ( !openFile( input ) )
   {
      cout << "Input file open failed.\n";
      exit( 0 );
   }

   // get output file name and open it
   output.open("output.dat");

   // read numbers while not eof and write them formatted to output file
   num = readNum( input );     // gets a number from the input file
   while ( !input.eof() ) 
   {
      writeNum( output, num );
      num = readNum( input );  // read next number from the input file
   }
  
   // close files and we're done
   input.close( );
   output.close( );
   return( 0 );
}

/* openFile: gets input file name from user and returns
 * true if open succeeded.
 * Parameters: 
 * 	in: input stream
 * Returns: true if open succeeded 
 */
bool openFile( ifstream& in ) {
   char filename[MAX_FILENAME];
   double n; 
   cout << "Enter filename: ";
   cin.getline( filename, MAX_FILENAME );
   in.open( filename );
   return ( !in.fail() );
}

/* readNum: reads one number from a file
   Parameters:
      in: input file
   Pre-condition: input file is already open
   Returns: next number in file
*/
double readNum( ifstream& in )
{
   double n;
   in >> n;
   return n;
}

/* writeNum: writes one number to a file in dollar format
   Parameters:
      out: output file
      n: number to write 
   Pre-conditions: output file is already open
   Returns: nothing
*/
void writeNum( ofstream& out, double n )
{
   out.precision( 2 );
   out.setf( ios::fixed );
   out.setf( ios::showpoint );
   out << "$" << setw(7) << left << n << "\n";
}
