#include<iostream>
using namespace std;

int main()
{
	int age;
	cout << "Welcome to the age program. Please input your age: \n";
	cin >> age;
	
	if ( age < 18 ) {
		cout << "You are too young to do anything.\n";
	}
	else if ( age >= 18 && age < 21 ) {
		cout << "You are old enough to vote!\n";
	}
	else if ( age >= 21 && age < 25 ) {
		cout << "You are old enough to vote and drink!\n";
	}
	else if ( age >= 25 && age < 65 ) {
		cout << "You are old enough to vote, drink, and rent a car!\n";
	}
	else if ( age >= 65 ) {
		cout << "You are old enough to vote, drink, rent a car, ";
		cout << "and collect social security benefits!\n";
	}
	cout << "Thank you for using this program!\n";

	return(0);
}
