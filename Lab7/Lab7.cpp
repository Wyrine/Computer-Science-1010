/*
File: Lab7.cpp 
Kirolos Shahat c1010d25
Date: 12/02/2015
This program takes a file input from the user and saves a poverty rate, county name,
and salary for said county. Sorts them by county name, and prints them out in a
neat table organized in order by county name, poverty rate, and salary
*/

//Header files used
#include<cstdlib>
#include<iostream>
#include<fstream>
#include<cstring>
#include<iomanip>
using namespace std;

//constants used in the program
const int MAX_COUNTY=10;
const int MAX_NAME= 15;
const int MAX_FILE_NAME = 26;

//structure that has three pieces of information in it; county name, poverty rate, and per capita income
struct County_Info{
	char county[MAX_COUNTY];
	double pov_rate;
	int pc_income;
};

//prototype functions that are called in main
int readCounties(County_Info[], istream&);
void lowerCase(County_Info[], int);
void sortCounties(County_Info[], int);
void capitalizeCounties(County_Info[], int);
void printCounties(County_Info[], int);

//main function
int main(){
	//declaring variables and functions to be used
	ifstream input;
	County_Info tn[MAX_COUNTY];
	char filename[MAX_FILE_NAME];
	int numCounties;
	
	//greeting the user
	cout << "Welcome to the Appalachian Poverty/Income Report\n";	
	//asking the user for a file name
	cout << "Enter input file name: ";
	//reading the file name 
	cin.getline(filename, MAX_FILE_NAME);
	//attempting to open the file
	input.open(filename);

	//if file open fails
	if(input.fail()){
		//print this and terminate
		cout << "Input file " << filename << " does not exist.\n";
		exit(0);
	}
	//otherwise
	else {
		//seekg starts from the beginning of the file and reads till the end of the file
		input.seekg (0, input.end);
		//counts the number of characters that were in the file
		int length = input.tellg();
		// goes back to the origin of the program
		input.seekg (0, input.beg);
		
		//if the length of the program is 0 then the file is empty
		if(length == 0){
			//Prints that back out to the user
			cout << "Input file " << filename << " is empty.\n";
		}
		else{
			//calling readCounties and storing the return value to an int
			numCounties = readCounties(tn, input);
			//calling lowerCase
			lowerCase(tn, numCounties);
			//calling sortCounties
			sortCounties(tn, numCounties);
			//calling capitalizeCounties
			capitalizeCounties(tn, numCounties);
			//calling printCounties
			printCounties(tn, numCounties);
		}

	}
	
	//closes input file
	input.close();
	return 0;
}
/*
readCounties: read and stores the information from the file into the structured array
parameters:
	tn: array of structures holding counties, poverty rates, and per capita incomes
return: the number of counties have been filled.
 */
int readCounties(County_Info tn[], istream& input){
	int i=0;
	input.getline(tn[i].county, MAX_NAME);
	input >> tn[i].pov_rate >> tn[i].pc_income;
	while(!input.eof() && i <MAX_COUNTY){
		input.ignore(1000, '\n');//ignores 1000 new line characters at most
		i++;
		if(i<MAX_COUNTY){
				input.getline(tn[i].county, MAX_NAME);
				input >> tn[i].pov_rate >> tn[i].pc_income;
		}
	}
	return i;
}
/*
lowercase: lowercases every character in the structures county names array
parameters:
	tn: array of structures holding counties, poverty rates, and per capita incomes
	numCounties: an int passed by value that has the number of structured arrays are in
				tn
return: void function has no return
 */
void lowerCase(County_Info tn[], int numCounties){
	//goes through every "tn"
	for (int i=0; i<numCounties; i++){
		//goes through every character in the county name
		for (int j=0; tn[i].county[j] != '\0'; j++){
			//lowercases the capital characters
			tn[i].county[j] = tolower(tn[i].county[j]);
		}
	}
}
/*
sortCounties: creates 3 temporary variables and uses a selection sort to organize the structured array based 
	off of spelling of the county name
parameters: 
	tn: array of structures holding counties, poverty rates, and per capita incomes
	numCounties: an int passed by value that has the number of structured arrays are in
				tn
return: void function has no return
 */
void sortCounties(County_Info tn[], int numCounties){
	County_Info temp;
	int minIndex;	
	//selection sort that determines wether the poverty rate percentage is ordered
	//from least to greatest and organizes it accordingly and automatically
	//moves the biggest value to the bottom of the array
	for (int top=0; top<numCounties - 1; top++){
		minIndex=top;
		for (int i=top+1; i<numCounties; i++){
			if(strcmp(tn[minIndex].county, tn[i].county) > 0){
				minIndex=i;
			}
		}
		//swapping the alphabetical county names and ordering them correctly
		temp = tn[minIndex];
		tn[minIndex] = tn[top];
		tn[top] = temp;
	}
}
/*
capatalizeCounties: capatalizes the first character of each county and checks to see if there is a space
	in the name, if there is then it capatalizes then next character after the space as long as it is
	not the new line character
parameters: 
	tn: array of structures holding counties, poverty rates, and per capita incomes
	numCounties: an int passed by value that has the number of structured arrays are in
				tn
return: void function has no return
 */
void capitalizeCounties(County_Info tn[], int numCounties){
	int i;
	for(i=0; i<numCounties; i++){
		tn[i].county[0] = toupper(tn[i].county[0]);
	}
	for(i=0; i<numCounties; i++){
		for(int j=0; tn[i].county[j] != '\0'; j++){
			if(tn[i].county[j] ==' ' && tn[i].county[j+1]!='\0'){
				tn[i].county[j+1] = toupper(tn[i].county[j+1]);
			}
		}
	}
}
/*
printCounties: prints the information in the structured array out in a neat table organized by county name
Parameters:
	tn: array of structures holding counties, poverty rates, and per capita incomes
	numCounties: an int passed by value that has the number of structured arrays are in
				tn
return: has no return, just prints to the user
*/ 
void printCounties(County_Info tn[], int numCounties){
	
	//Prints out county, poverty rate, and salary. Sets width and aligns them accordingly
	cout << setw(15) << left << "County";
	cout << setw(12) << right << "Poverty Rate";
	cout << setw(15) << right << "Salary\n";

	//line for the table being printed
	cout <<"-----------------------------------------\n";
	
	//printing out all the different arrays of each from 0 to numCounties
	for(int i=0; i<numCounties; i++){
		
		//printing out county
		cout << setw(15) << left << tn[i].county;
		
		//printing out poverty rate with a 1 decimal place percentage
		cout << setw(8) << right << setprecision(1) << showpoint << fixed << tn[i].pov_rate
		<< "%";
		
		//print out salary with no decimals
		cout << setw(12) << right <<" $";
		cout << setw(5) << right << noshowpoint << fixed << tn[i].pc_income << endl;
	}
}
