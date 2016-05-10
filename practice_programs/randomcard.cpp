#include<iostream>
#include<ctime>
#include<cstdlib>
using namespace std;

int main(){



	srand(time(0));
	int cardFace, cardSuit;
	cardFace = rand()%13;
	switch(cardFace){
		case 0://Ace
			cout << "Your card is the Ace";
			break;
		case 1://two
			cout << "Your card is the Two";
			break;
		case 2://three
			cout << "Your card is the Three";
			break;
		case 3://four
			cout << "Your card is the Four";
			break;
		case 4://five
			cout << "Your card is the Five";
			break;
		case 5://six
			cout << "Your card is the Six";
			break;
		case 6://seven
			cout << "Your card is the Seven";
			break;
		case 7://eight
			cout << "Your card is the Eight";
			break;
		case 8://nine
			cout << "Your card is the Nine";
			break;
		case 9://ten
			cout << "Your card is the Ten";
			break;
		case 10://jack
			cout << "Your card is the Jack";
			break;
		case 11://queen
			cout << "Your card is the Queen";
			break;
		case 12://king
			cout << "Your card is the King";
			break;
	}
			
	cardSuit= rand()%4;
	switch(cardSuit){
		case 0://hearts
			cout << " of hearts.\n";
			break;
		case 1://spades
			cout << " of spades.\n";
			break;
		case 2://clubs
			cout << " of clubs.\n";
			break;
		case 3://diamonds
			cout << " of diamonds.\n";
		break;
    	}


return(0);
}

				
