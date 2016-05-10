#include<iostream>
using namespace std;



struct CDAccount{

	double balance;
	int term;
	double rate;
};

void getData(CDAccount&);
void printData(const CDAccount&);

int main(){
	CDAccount account;
	getData(account);
	printData(account);
return 0;


}


void getData(CDAccount& cd){
	cout << "Balance, term, and interest rate: ";
	cin >> cd.balance >> cd.term >> cd.rate;
} 

void printData(const CDAccount& cd){

	cout << "Balance: " << cd.balance << endl;
	cout << "Term: " << cd.term << endl;
	cout << "Interest Rate: " << cd.rate << endl;
}

