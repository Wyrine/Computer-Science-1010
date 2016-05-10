#include<iostream>
using namespace std;

double printCube(double);

int main(){

	double userInput, sum;
	cout << "Welcome to the cubing program!\n";
	cout << "Please enter the number you would like to cube: ";
	cin >> userInput;
	sum = printCube(userInput);
	cout << "The cubed total is " << sum << ".\n";
	cout << "Thank you for using this program.\n";

	return(0);
}

double printCube (double num){

	num = num*num*num;

	return(num);
}
	
	
