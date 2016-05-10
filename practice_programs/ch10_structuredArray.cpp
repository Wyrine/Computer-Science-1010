#include<iostream>
#include<cstring>
#include<fstream>
#include<cctype>
using namespace std;

struct Person{

	char name[30];
	int age;
	char gender;
};

int readPeople(Person[], istream&);
void lowercaseNames(Person[], int);
void sortPeople(Person[], int[]);
void printPeople(Person[], int);

int main(){
	ifstream input;
	input.open( "input.dat");
	Person people[10];
	int personSize = readPeople(people, input);
	lowercaseNames(people, personSize);
	printPeople(people, personSize);
input.close();
return 0;
}

int readPeople(Person people[10], istream& input){
	int i=0;
	input >> people[i].name >> people[i].age >> people[i].gender;
	while(!input.eof() && i <10){
		i++;
		if(i<10){
			input>>people[i].name>> people[i].age>> people[i].gender;
		}
	}
	return i;
}

void lowercaseNames(Person people[10], int i){
	int c=0;
	for(int j=0; j<i; j++){ // loop thru every person
                c=0;
		while(people[j].name[c] != '\0'){ // loops thru one name
			people[j].name[c] = tolower(people[j].name[c]);
			c++;
		}
	}
}
void sortPeople(Person people[10], int i){
	string tempName;
	for(int top=0; top<i; top++){
		//find minimum element from top to bottom
		minindex=top;
		for(i=+1; i<n; i++){
			if(strcmp(p[minindex]name>p[i].name)>0){
				minindex=i;
			}
		}
		temp=p[minIndex];
		p[minIndex]=p[top];
		p[top]=temp;
	}
}
		
}
void printPeople(Person people[10], int i){
	int c=0;
	for(int c=0; c<i; c++){
		cout << "Name: " << people[c].name;
		cout << " Age: " << people[c].age;
		cout << " Gender: " << people[c].gender << endl;
	}
}



