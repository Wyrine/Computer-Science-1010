/*
File: Lab5.cpp 
Kirolos Shahat c1010d25
Date: 11/11/2015
This program takes a file input from the user and saves a poverty rate, county name,
and salary for said county. Sorts them by poverty rate, and prints them out in a
neat table organized in order by County name, poverty rate, and salary
*/

//Header files used(not all are used)
#include<fstream>
#include<iostream>
#include<iomanip>
#include<cstring>
#include<cstdlib>
#include<cmath>
#include<stdio.h>
using namespace std;

//the 3 function prototypes for the program
int readFile(ifstream&, string [], double [], int []);
void sortFile(string [], double [], int [], int);
void printFile(string [], double [], int [], int);

//constants that are used for array sizes. MAX_NAME is used for the input file
//MAX_ARRAY for the 3 array's used 
const int MAX_ARRAY=10;
const int MAX_NAME=25;

int main(){
	//naming the input file that we are going to use
	ifstream input; 
	//character(up to the size of MAX_NAME) that is the name of the file being opened
	char filename[MAX_NAME];
	//string array that holds up to 10 countries
	string countyName[MAX_ARRAY];
	//double array that holds up to 10 poverty rates 
	double povRate[MAX_ARRAY];
	//int array that holds up to 10 salaries 
	int salary[MAX_ARRAY];
	//will become the array size
	int arrayLength;

	//greeting the user
	cout << "Welcome to the Appalachian Poverty/Income Report\n";
	//asking user for file name
    cout << "Enter input file name: ";
	//read in file name(up to 25 characters)
    cin.getline(filename, MAX_NAME);
	//open the file
    input.open(filename);
	//if the input fails:
	if(input.fail()){
		//prints if the input failed
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
			//calls readFile and the return value is the length of the array
			arrayLength= readFile(input, countyName, povRate, salary);
			//after reading, calls sort file
			sortFile(countyName, povRate, salary, arrayLength);
			//starts the function that prints the program to the user
			printFile(countyName, povRate, salary, arrayLength);	
		}

	}
	
	//closes input file
	input.close();
	return 0;
}


/*
readFile: reads the inputs in the file and stores them into in their respectful arrays
parameters: reference input file stream, string array of county names, double array for poverty rate
	    and integer for salary 
returns: the count of the total array size
 */

int readFile (ifstream& input, string countyName[], double povRate[], int salary[]){
	string county;
	double poverty;
	int sal;
	int i=0;
	//storing the first line from the input file
        input >> county >> poverty >> sal;
	//while the program is not at the end of the file and it hasn't reached the cap
	while(!input.eof()&&i<MAX_ARRAY){
		//first string goes to countyName
		countyName[i] = county;
		//first double goes to povRate
		povRate[i]=poverty;
		//first int goes to salary
		salary[i]=sal;
		//increment i which is the current array size(loop control)
		i++;
		//update the information
		input >> county >> poverty >> sal;
	}
	//returning array size
	return i;
}

/*
sortFile: creates 3 temporary variables and uses a selection sort to organize the three arrays based off
	  of the lowest poverty rate to the highest
parameters: string array of county names, double array for poverty rate, integer for salary, and the 
            pass by value arraySize
 */
void sortFile (string countyName[], double povRate[], int salary[], int arraySize){
	string tempCounty;
	double tempPov;
	int tempSalary;
	int minIndex=0;
	
	//selection sort that determines wether the poverty rate percentage is ordered
	//from least to greatest and organizes it accordingly and automatically
	//moves the biggest value to the bottom of the array
	for (int top=0; top <arraySize-1; top++){
		minIndex=top;
		for(int i=top+1; i<arraySize; i++){
			if(povRate[minIndex]>povRate[i]){
				minIndex=i;
			}
		}
		tempPov=povRate[minIndex];
		tempCounty=countyName[minIndex];
		tempSalary=salary[minIndex];

		povRate[minIndex]=povRate[top];
		countyName[minIndex]=countyName[top];
		salary[minIndex]=salary[top];

		povRate[top]=tempPov;
		countyName[top]=tempCounty;
		salary[top]=tempSalary;
		
	}	
}
/*
printFile: prints out "County, Poverty Rate, Salary" and then a table of the values in their 
	   corresponding values starting with county and aligns them under their appropriate
	   types.
parameters: string array of county names, double array for poverty rate, integer for salary, and the
            pass by value arraySize

 *
 */
void printFile (string countyName[], double povRate[], int salary[], int arraySize){

	//Prints out county, poverty rate, and salary. Sets width and aligns them accordingly
	cout << setw(10) << left << "County";
	cout << setw(14) << right << "Poverty Rate";
	cout << setw(13) << right << "Salary\n";

	//line for the table being printed
	cout << "------------------------------------\n";

	//printing out all the different arrays of each from 0 to MAX_ARRAY
	for (int i=0; i<arraySize; i++){
		//Printing out county
		cout << setw(10) << left << countyName[i];
		//Printing out poverty rate with a 1 decimal place percentage
		cout << setw(10) << right << setprecision(1) << showpoint << fixed << povRate[i]
		<< "%";
		//prints out salary with no decimals
		cout << setw(10)<< right << noshowpoint << fixed << "$"; 
		cout << setw(5) << right << noshowpoint << fixed << salary[i] << endl;
	}
}

