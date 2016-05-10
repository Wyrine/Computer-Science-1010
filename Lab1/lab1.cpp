/*
File: lab1.cpp
Author: Kirolos Shahat
Date: 9/9/2015
This program takes Carbon, Hydrogen, Sulfur, and Oxygen from the user and puts them in an equation
to calculate a calorific value on coal.
*/ 

//The header file
#include<iostream>


//Allows us to use simplified printing commands
using namespace std;

//The main function
int main()
{ 
	//Making the storage area for the user inputs and the final value
	double Carbon, Hydrogen, Oxygen, Sulfur, Calorific;
	
	//Introducing the program to the user.
	cout << "Welcome to the Coal Calorific Value Calculator." << endl;
	
	//Asking the user for inputs Carbon, Hydrogen, Sulfur, and Oxygen
	cout << "Please enter the percent of Carbon, Hydrogen, Sulfur, and Oxygen in this coal: " << endl;
	
	//Storing the values of the inputs from the user
	cin >> Carbon >> Hydrogen >> Sulfur >> Oxygen;
	
	//The mathematic equation which is Q = 337C + 1442(H - O/8) + 93s and divides it by 100 to get the actual value and stores it
	//in Calorific
	Calorific = (( 337 * Carbon ) + 1442 * ( Hydrogen - ( Oxygen / 8 )) + ( 93 * Sulfur )) / 100;
	
	//Prints the value back to the User
	cout << "Coal Calorific Value: " << Calorific << " kj/kg." << endl;
	
	//Thanks the user for their use of the program
	cout << "Thank you for using this program!" << endl;
		
	return(0);
}