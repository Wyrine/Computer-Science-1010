#include<iostream>
using namespace std;

int main(){

	cout << "Welcome to the student grading program!\n";
	cout << "Please enter a grade (anything below 0 to end): ";
	double grade;
	cin >> grade;

	while (grade>=0){
		if (grade >= 93) {
			cout << "You get an A!\n";
		}
		else if (grade >= 83){
			cout << "You get a B!\n";
		}
		else if (grade >= 73){
			cout << "You get a C!\n";
		}
		else if (grade >= 63){
			cout << "You get a D!\n";
		}
		else {
			cout << "You get an F!\n";
		}
	cout << "Please enter a grade (0 to end): ";
	cin >> grade;
	}
	cout << "Thank you.\n";

	return (0);
}
