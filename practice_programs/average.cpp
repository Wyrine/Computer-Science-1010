#include<iostream>
using namespace std;

int main(){

	cout << "Welcome to the average grades sum.\n";
	cout << "Please enter a grade: ";
	
	double grade, averageGrade=0;
	int n;

	for (n=0; n<10; n++) {
		
		cin >> grade;
		averageGrade = averageGrade + grade;

		if (n<9){
			cout << "Please enter another grade: ";
		}
	}

	averageGrade = averageGrade / 10;

	cout << "The class average is: " << averageGrade << ".\n";

	cout << "Thank you.\n";

	return (0);
}
