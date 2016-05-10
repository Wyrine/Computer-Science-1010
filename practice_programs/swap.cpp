#include<iostream>
using namespace std;

void swapNumbers(int&, int&);

int main(){

	int x, y;

	cout << "Please enter a number for x and another number for y: ";
	cin >> x >> y;
	swapNumbers(x,y);
	cout << "The swapped output would be: x=" << x;
	cout << " and y=" << y << endl;
return(0);
}
void swapNumbers(int& x, int& y){

	int xx, yy;
	xx = y; yy = x;
	x = xx; y = yy;
}	




