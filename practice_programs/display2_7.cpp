/* File: display2_7.cpp
   Author: Cindy Arnold
   This program calculates gross salary with 1.5 times overtime for more 
   than 40 hours
*/
#include <iostream>
using namespace std;

int main() {
   double hours;          // hours worked
   double rate, salary;   // pay rate per hour, gross salary

   
   // get hours and rate from user
   cout << "Enter pay rate and hours worked (e.g., 12.3  35): ";
   cin >> rate >>  hours;
   // calculate salary
   if  (hours <= 40 )  {
      salary = rate*hours;
   }
   else { // hours < 40
      salary = rate*40 + (hours - 40)*rate*1.5;
   }
   
   // print out salary
   cout.precision( 2 );
   cout.setf( ios::fixed | ios::showpoint );
   cout << "Your salary is: $" << salary << endl;
   return( 0 );
}
