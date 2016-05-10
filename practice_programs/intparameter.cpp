#include<iostream>
using namespace std;

bool intTest(int);

int main(){

	int userNum;
	bool testValue;

	cout << "Welcome to the positivity test!\n";
	cout << "Please enter a number to test: ";
	cin >> userNum;
	testValue = intTest(userNum);
	
	if (testValue){
		cout << "The number is positive, true!\n";
	}
	else {
		cout << "The number is negative, false.\n";
	}

	cout << "Thank you for using this program!\n";

	return(0);
}

bool intTest(int testNumber){

	if (testNumber >= 0){
		return true;
	}
	else {
		return false;
	}

}
	
	
