#include<iostream>
#include<cmath>
using namespace std;

int main(){

int powerTwo[11];

for (int i=0;i<11;i++){
	powerTwo[i] = pow(2 , i);
	cout << powerTwo[i] << endl;
}

return(0);
}
