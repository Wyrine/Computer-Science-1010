#include<iostream>
#include<iomanip>
using namespace std;

void printBarGraph(int[], int);

int main(){
	int graphArray[7]= {3, 5,8, 4, 5, 6};
	printBarGraph(graphArray, 6);
	return(0);

}

void printBarGraph(int graphArray[], int count){
	int i = 0;
	while ( i< count){
		int n=1;
		while(n<=graphArray[i]){
			cout << "*";
			if(graphArray[i]==n){
				cout<<endl;
			}
			n++;
		}	
	i++;
	}
}





