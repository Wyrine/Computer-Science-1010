#include<iostream>
#include<cmath>
using namespace std;

void figureIt(double, bool&, char&, int&);

int main(){

	double num;
	bool div;
	char sign;
	int yeah;

	cout << "Please enter a number: ";
	cin >> num;
	
	figureIt(num, div, sign, yeah);
	cout << "Your number is: " << num << endl;
	if ( div) {
		cout << "Your number is divisible by 2.\n";
	}
	else {
		cout << "Your number is not divisible by 2.\n";
	}
	cout << "Your number's sign is: " << sign << endl;
	cout << "Your number rounded is: " << yeah << endl;
	cout << "See ya.\n";
	return(0);	





}


void figureIt(double numTemp, bool& numDiv, char& numSign, int& numInt){
	
	//bool for numDiv
	if (fmod(numTemp,2) == 0) {
		numDiv = 1;
	}
	else {
		numDiv = 0;
	}
	
	if (numTemp >= 0) {
		numSign = '+';
	else {
		numSign = '-';
	}

	numInt = static_cast<numTemp>;
}
	
