/*File: Programming Project 3
 * Authors: Kirolos Shahat and Craig Bunch
 * Date: 9/2/2015
 * Gets an amount of quarters, dimes, and nickels and converts them into pennies.
 * */
//Header files
#include<iostream>
#include<cstdlib>
using namespace std;


//Main program
int main()
{
	//Defining the integers we are using later in the program
        int quarters, dimes, nickels, sum;

	//Introducing the program to the user
        cout << "Welcome to the Coin Value Program!"<< endl;

	//Ask the user for an amount of quarters, dimes, and nickels
        cout << "Please enter the amount of quarters, dimes, and nickels: " << endl;

        //Read the amounts entered from the user and save them in their integers
	cin >> quarters >> dimes >> nickels;

	//The equation to get cents
        sum = (quarters*25)+(dimes*10)+(nickels*5);

	//The print that will return to the user including the amount of cents
        cout << "The amount of coins you input are equivalent to: " << sum << "cents" << 
        endl;
	
	//Thanking the user for using the program
        cout << "Thank you for using the Coin Value Program!" << endl;

        return(0);
}

