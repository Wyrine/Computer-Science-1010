#include<iostream>
using namespace std;

int main(){

	cout << "Welcome to the 2 powering program.\n";
	cout << "Please enter the number of squares you'd like to use.\n";

	int power, n;
	double sum=1;
	cin >> power;


	for(n=0;power >= n; n++){

		cout << n << "        " << sum << endl;
		sum = sum * 2;
	}

	cout << "Thank you.\n";
return(0);
}

	
	
		
