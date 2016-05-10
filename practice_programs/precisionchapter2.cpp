#include<iostream>
#include<iomanip>
using namespace std;

int main()
{
	double x = 42.1298;
	cout.setf(ios::fixed);

	cout.precision(0);
	cout << "The answer to the question of\n";
	cout << "Life, the Universe, and Everything is " << x;
	cout.setf(ios::showpoint);
	cout.precision(1);
	cout << ", not "<< x;
	cout.precision(2);
	cout  << " and not $" << x << endl;

	return(0);
}
