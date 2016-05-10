#include<iostream>
#include<cstring>
using namespace std;

const int MAX_AREA=81;
void myStrCpy(char[], char[]);

int main(){

	char s1[MAX_AREA];
	char s2[MAX_AREA];

	cout << "Gimme word: ";
	cin >> s1;

	myStrCpy(s1, s2);
	
	cout << s1 << " " << s2 << endl;
	cout << "cya.\n";
return 0;
}

void myStrCpy(char s1[], char s2[]){
	int i;
	for(i=0; s1[i] !='\0'; i++){
		s2[i] = s1[i];
	}
        s2[i]='\0';
}


