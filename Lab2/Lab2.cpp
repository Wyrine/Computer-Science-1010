/*
File: lab2.cpp
Author: Kirolos Shahat c1010d25
Date: 9/23/2015
This program takes Carbon, Hydrogen, Sulfur, and Oxygen from the user and puts them in an equation
to calculate a calorific value on coal.
*/ 

//The header file
#include<iostream>
using namespace std;

// part of the calorific equation. Multiplied by carbon
const double CARBON_COEF = 337;
// part of the calorific equation. Multiplied by the sum of hydrogen and oxygen
const double CALORIFIC_ADD = 1442;2
// part of the calorific equation. Denominator of oxygen 
const double OXYGEN_COEF = 8; 
// part of the calorific equation. Multiplied by sulfur
const double SULFUR_COEF = 93; 
// part of the calorific equation. Converts the equation from a percentage to an amount.
const double CALORIFIC_DIVISOR = 100;
//Allows us to use simplified printing commands


//The main function
int main()
{ 
	//Making the storage area for the user inputs and the final value
	double carbonPercent, hydrogenPercent, oxygenPercent, sulfurPercent, calorific;
	
	//Introducing the program to the user.
	cout << "Welcome to the Coal Calorific Value Calculator." << endl;
	
	//Asking the user for inputs Carbon, Hydrogen, Sulfur, and Oxygen
	cout << "Please enter the percent of Carbon, Hydrogen, Sulfur, and Oxygen in this coal: " << endl;
	
	//Storing the values of the inputs from the user
	cin >> carbonPercent >> hydrogenPercent >> sulfurPercent >> oxygenPercent;
	
	//if statement checking to see if the sum of the inputs are greater than 100
	if (carbonPercent + hydrogenPercent + sulfurPercent + oxygenPercent > 100) {
		////The user did not obey the max percentage range so the error will be printed
		cout << "Percentages cannot add up to more than 100.\n";
	
	}
	//Checking to see if the user obeyed the valid ranges allowed for the equation
	else if (carbonPercent < 44 || carbonPercent > 79 || hydrogenPercent < 2 || hydrogenPercent > 5 || sulfurPercent < 0.5 || sulfurPercent > 4.5 ||
			 oxygenPercent < 1 || oxygenPercent > 30){
				 //If the user did not obey the valid ranges then it checks which one they didn't obey and prints out the error to the user
				 if (carbonPercent < 44 || carbonPercent > 79){
					 //The user did not obey the Carbon percent ranges allowed so the error will be printed
					 cout << "Carbon must be between 44% and 79%.\n";
				 }
				 if (hydrogenPercent < 2 || hydrogenPercent > 5){
					 //The user did not obey the Hydrogen percent ranges allowed so the error will be printed
					 cout << "Hydrogen must be between 2% and 5%.\n";
				 }
				 if (sulfurPercent < 0.5 || sulfurPercent > 4.5){
					 //The user did not obey the Sulfur percent ranges allowed so the error will be printed
					 cout << "Sulfur must be between 0.5 and 4.5%.\n";
				 }
				 if (oxygenPercent < 1 || oxygenPercent > 30) {
					 //The user did not obey the Oxygen percent ranges allowed so the error will be printed
					 cout << "Oxygen must be between 1% and 30%. \n";
				 }
			 }
	else {
		//The mathematic equation which is Q = 337C + 1442(H - O/8) + 93s and divides it by 100 to get the actual value and stores it
		//in Calorific
		calorific = (( CARBON_COEF * carbonPercent ) + CALORIFIC_ADD * ( hydrogenPercent - ( oxygenPercent / OXYGEN_COEF )) + ( SULFUR_COEF * sulfurPercent )) / CALORIFIC_DIVISOR;
		
		//Prints the value back to the User with only one decimal
		cout.setf(ios::fixed);
		cout.setf(ios::showpoint);
		cout.precision(1);
		cout << "Coal Calorific Value: " << calorific << " kj/kg." << endl;
		
	}
	
	//Thanks the user for their use of the program
	cout << "Thank you for using this program!" << endl;
		
	return(0);
}