#include<iostream>
#include<iomanip>
using namespace std;
void printMonies(double[], int);

const int MAX=10;

int main(){

	double number[MAX]= {12.3, 45.6, 78.9, 78.91, 283.43, 34835.1];

	printMonies(number, 6};

	return(0);
}

void printMonies(double mArray{}, int n){

	cout.setf(ios::fixed | ios::showpoint);
	cout.precision(2);
	for(int i=0; i<n; i++)
	{
		cout <<"$"<<mArray[i]<<endl;
	}
}
