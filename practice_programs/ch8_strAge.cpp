#include<cstdlib>
#include<iostream>
#include<cstring>
#include<stdio.h>
using namespace std;

int main(){

	char strAge[4];
	int i, sum = 0;
	int age;
	bool badInt=false;
	do {
		cout << "age: ";
		cin.getline(strAge, 4);
		for(i=0; strAge[i]!='\0'; i++){
			if(!isdigit(strAge[i])){
				badInt=true;
				break;
			}
		}
		age = atoi(strAge);
		sum = 2015-age;
		if(badInt){
			cout<< "Must be an int idiot.\n";
		}
		else{
			cout << "You were born in the year " << sum << ".\n";
			cout << "thanks.\n";
		}
	}while(!cin.eof());
return 0;
}

	
