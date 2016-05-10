/*
File: lab4.cpp
Author: Kirolos Shahat c1010d25
Date: 10/19/2015
This program takes Carbon, Hydrogen, Sulfur, and Oxygen from the user and puts them in an equation
to calculate a calorific value on coal.
*/ 

//The header file
#include<iostream>
using namespace std;

// part of the calorific equation. Multiplied by carbon
const double CARBON_COEF = 337;
// part of the calorific equation. Multiplied by the sum of hydrogen and oxygen
const double CALORIFIC_ADD = 1442;
// part of the calorific equation. Denominator of oxygen 
const double OXYGEN_COEF = 8; 
// part of the calorific equation. Multiplied by sulfur
const double SULFUR_COEF = 93; 
// part of the calorific equation. Converts the equation from a percentage to an amount.
const double CALORIFIC_DIVISOR = 100;
//Allows us to use simplified printing commands
// valid ranges for carbon(44-79), hydrogen(2-5), sulfur(0.5-4.5), and oxygen(1-30) used throughout the program 
const double C_MIN = 44;
const double C_MAX = 79;
const double H_MIN = 2;
const double H_MAX = 5;
const double S_MIN = 0.5;
const double S_MAX = 4.5;
const double O_MIN = 1;
const double O_MAX = 30;

//prototype calls for the user defined functions
void getPercents(double&, double&, double&, double&);
double percentSum(double, double, double, double);
bool badRanges(double, double, double, double, bool&, bool&, bool&,bool&);
double calcCalorific(double, double, double, double);

int main() {
	double calorific; //in kJ/kg
	double carbonP, hydrogenP, sulfurP, oxygenP; // percents. 100=100%
	bool cBad, hBad, sBad, oBad; //true if element percent out of range
	
	cout.setf( ios::fixed | ios::showpoint);
	cout.precision(1);
	
	//get element percentages from user
	getPercents(carbonP, hydrogenP, sulfurP, oxygenP);
	while (carbonP !=0) {
		//if element percentages over 100
		if (percentSum(carbonP, hydrogenP, sulfurP, oxygenP)>100) {
			cout << "Percentages cannot add up to more than 100.\n";
		}
		//if any element percentage value is out of valid range
		else if (badRanges( carbonP, hydrogenP, sulfurP, oxygenP, cBad, hBad, sBad, oBad)){
			
			if (cBad){
				cout << "Carbon must be between 44% and 79%.\n";
			}
			if (hBad){
				cout << "Hydrogen must be between 2% and 5%.\n";
			}
			if (sBad){
				cout << "Sulfur must be between 0.5% and 4.5%\n";
			}
			if (oBad){
				cout << "Oxygen must be between 1% and 30%.\n";
			}
		
		}
		//if elemental percentages all in range/valid
		else {
			calorific = calcCalorific( carbonP, hydrogenP, sulfurP, oxygenP);
			cout << "Coal Calorific Value: " << calorific << " kJ/kg\n";
		}
		//get element percentages from user for next batch of coal
	getPercents(carbonP, hydrogenP, sulfurP, oxygenP);
	}// end while carbon percent != 0
	
	cout << "Thank you for using this program!\n";
	
	return 0;	
}

/*getPercents: asks for carbon, if not equal to zero then it asks for hydrogen, sulfur, and oxygen. Percentages between 0-100%
  Parameters: doubles. Pass by reference variables that stand for carbon, hydrogen, sulfur, and oxygen
  returns: void function, returns nothing
*/
	void getPercents(double& c, double& h, double& s, double& o){
	  cout << "Please input a percentage for carbon: ";
	  cin >> c;
	  //testing to see if carbon input is 0 or not.
	  if (c != 0){
			 //if carbon is not 0 then asks for the other inputs
			 cout << "Please enter hydrogen, sulfur, and oxygen values: ";
			 cin >> h >> s >> o;
			 
	  }
	}
  
/*percentSum: adds up the sum of carbon, hydrogen, sulfur, and oxygen
  parameters: doubles. Pass by value variables of carbon, hydrogen, sulfur, and oxygen
  returns: the sum of carbon, hydrogen, sulfur, and oxygen
*/
	double percentSum(double c, double h, double s, double o){
		double sum = 0;
		//calculates the sum of carbon, hydrogen, sulfer, and oxygen
		sum = c+h+s+o;
		return sum;
	}
	
/*badRanges: tests to see if carbon, hydrogen, sulfur, and oxygen are all inside of their valid ranges
			 if they are then it returns true for each individual variable and the function also returns true
			 percentages between 0-100&
  parameters: doubles and bools. carbon, hydrogen, sulfur, and oxygen as the doubles, pass by value.
			  cBad, hBad, sBad, and oBad being the pass by reference bools.
  returns: true if any of the boolean variables are true, otherwise false
*/
	bool badRanges (double c, double h, double s, double o, bool& cBad, bool& hBad, bool& sBad, bool& oBad){
		//testing to see if all the inputs are within the valid ranges.
		//if the inputs are not within their ranges returns true for their respective test
		//variables
		if ( c < C_MIN|| c > C_MAX){
			cBad=1;
		}
		else {
			cBad=0;
		}
		if ( h < H_MIN || h> H_MAX){
			hBad=1;
		}
		else {
			hBad=0;
		}
		if ( s < S_MIN || s > S_MAX){
			sBad=1;
		}
		else {
			sBad=0;
		}
		if ( o < O_MIN|| o > O_MAX){
			oBad=1;
		}
		else {
			oBad=0;
		}
		
		//if any, or all, of the test variables are true due to bad inputs, the function returns true.
		if( cBad == 1 || hBad == 1 || sBad == 1 || oBad == 1){
			return 1;
		}
		else {
			return 0;
		}
	}
	
/*calcCalorific: Uses the mathematic equation which is Q = 337C + 1442(H - O/8) + 93s and divides it by 100 to get the actual value
				 percentages between 0-100%
  parameters: doubles. carbon, hydrogen, sulfur, and oxygen being pass by value variables
  returns: sum of the equation
*/
	double calcCalorific(double c, double h, double s, double o){
		double sum = 0;
		sum = (( CARBON_COEF * c ) + CALORIFIC_ADD * ( h - ( o / OXYGEN_COEF )) + ( SULFUR_COEF * s )) / CALORIFIC_DIVISOR;
		return sum;
	}








