#include<iostream>
#include<cstring>
using namespace std;


const int MAX_ARRAY = 99;
int main(){

	char firstInput[MAX_ARRAY];
	char secondInput[MAX_ARRAY];
	cout << "Hey, put in a word: ";
	cin >> firstInput;
	cout << "Put in a second word: ";
	cin >> secondInput;

	if(strcmp(firstInput, secondInput)==0){
		cout << "Both words are equal!\n";
	}
	else if(strcmp(firstInput, secondInput)<0){
		cout << firstInput << " " << secondInput << endl;
	}
	else {
		cout << secondInput << " " << firstInput << endl;
	}

	cout << "Thanks.\n";
	return 0;
}
