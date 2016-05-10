#include<iostream>
using namespace std;

int main()
{
	cout << "Welcome to the MPG calculator!\n";
	cout << "Please input miles: \n";
	
	double miles, gallons, mpg;

	cin >> miles;
	
	if (miles < 0){
		cout << "Miles must be greater than or equal to 0.\n";
	}
	else {
		cout << "Please input gallons: \n";
		cin >> gallons;

		if (gallons <= 0){
			cout << "Gallons must be greater than 0.\n";
		}
	
		else {
			mpg = miles / gallons;
			cout << "Your MPG is: " << mpg << endl;
		}
	}
	cout << "Thank you for using this program!\n";

	return(0);
} 
