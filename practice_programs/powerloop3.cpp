#include<iostream>
using namespace std;

int main(){

	cout << "Welcome to the powering program.\n";
	cout << "Please enter the number you would like to square.\n";

	int power, n;
	double exponent, sum;
	cin >> exponent;
	cout << "Please enter the power you would like to use (must be natural).\n";
	cin >> power;
	sum = exponent;

	if (power <0){
		for (n=0; power < n; n--){
			cout << n << "      " << sum << endl;
			sum = sum * exponent;
			sum = 1/sum;
		}
	}
	else {

		for(n=0;power > n; n++){
			cout << n << "        " << sum << endl;
			sum = sum * exponent;
		}
	}

	cout << "Thank you.\n";
return(0);
}

	
	
		
