#include<iomanip>
#include<cstring>
#include<cctype>
#include<iostream>
using namespace std;


const int MAX_CHAR= 99;

int main(){
	char randString[MAX_CHAR];

	cout << "Word me breh: ";
	cin >> randString;
	for(int i=0; randString[i] !='\0'; i++){
		randString[i]= tolower(randString[i]);
	
	}
	cout << randString << endl;	


return 0;
}

