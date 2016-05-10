#include<iostream>
using namespace std;

int main()
{
	cout << "Welcome to the letter grade calculator!\n";
	cout << "Please input your grade: \n";
	
	char letterGrade = ' ';
	double grade;

	cin >> grade;
	
	if ( grade  < 0 || grade > 100 ){
		cout << "Grade must be greater than 0 and not greater than 100 .\n";
	}
	
	else {
		 if ( grade >= 93 && grade <= 100){

			letterGrade = 'A';
		}
		else if ( grade >=83 && grade < 93) {
		
			letterGrade = 'B';
		}
		else if ( grade >= 73 && grade < 83) {
		
			letterGrade = 'C';
		}
		else if ( grade >= 65 && grade < 73) {

			letterGrade = 'D';
		}
		else{
			letterGrade = 'F';
		}
	
		cout << "Your letter grade is: " << letterGrade << endl;
		}

	cout << "Thank you for using this program!\n";

	return(0);
} 
