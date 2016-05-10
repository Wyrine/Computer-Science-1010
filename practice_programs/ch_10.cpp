#include<iostream>
#include<cstring>
using namespace std;

struct MyPet{

	string petName;
	int petAge;
	bool neutTest;
};

int main(){
	MyPet variable; 
	char boolTest;
	cout << "Name, Age, neutered? ";
	cin >> variable.petName >> variable.petAge >> boolTest;

	if (boolTest == 'Y' || boolTest == 'y'){
		variable.neutTest=true;
	}
	else {
		variable.neutTest=false;
	}

	cout << variable.petName << " " << variable.petAge << " " << boolTest << endl;
	
	return 0;
}
