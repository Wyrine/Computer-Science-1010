/* File: ____
   Author: _____
   Description: _____
*/
#include <iostream>
using namespace std;

int main()
{
   double hours, rate, salary;

   do {
      cout << "Enter hours worked (0 to end): ";
      cin >> hours;
      if ( hours > 0 ) {
         cout << "Enter hourly rate: ";
         cin >> rate;
         if ( hours <= 40 ) {
            salary = hours * rate;
         }
         else {
            salary = 40*rate+(hours-40)*1.5*rate;
         }
         cout << "Salary: " << salary << endl;
      } // end if hours > 0
   } while ( hours > 0 );

   cout << "Bye bye\n";

   return( 0 );
}
