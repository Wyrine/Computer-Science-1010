#include<iostream>
using namespace std;

int main(){
	
	cout << "Welcome to the Employee Salary Calculator!\n";
	cout << "Please enter your hours, the program will terminate at 0 hours: \n";
	
	double hours, rate, salary;

	cin >> hours;

	while (hours !=0) {
		
		cout << "Please enter your hourly rate: \n";
		cin >> rate;

		if (hours <=40) {
			salary = hours * rate;
		}
		else {
			salary = 40*rate + (hours-40)*rate*1.5;
		}
	
		cout << "Your Salary is: $" << salary << ".\n";
		cout << "Please enter your hours: \n";
		cin >> hours;
	}
	cout << "Thank you for using this program!\n";

	return(0);
}
