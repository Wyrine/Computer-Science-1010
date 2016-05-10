#include<iostream>
#include<cstring>
#include<cmath>
#include<cctype>
#include<stdio.h>
using namespace std;


const int MAX_AREA=99;
int main(){

	char numbers[MAX_AREA];

cout << "Enter a number." << endl;
cin.getline (numbers, MAX_AREA);

	for(int i=0; numbers[i] !='\0'; i++){
		if(numbers[i]=='.'){
			for (int n=i+1; numbers[n]!='\0';n++){
				if(numbers[n]=='.'){
					cout << "I hate you. You suck." << endl;
				}
			}
		}
	}
return 0;
}	
