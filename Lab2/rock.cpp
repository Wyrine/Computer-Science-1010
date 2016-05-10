#include<iostream>
using namespace std;

int main() {
	
	cout << "Welcome to the rock, paper, scissors programs!\n";
	cout << "The rules are simple: paper beats rock, rock beats scissors, and\n";
	cout << "scissors beat paper. If there are two of the same no one wins.\n";
	
	char player1, player2;
	
	cout << "Enter player one's choice between P, S, R: \n";
	cin >> player1;
	cout << "Enter player two's choice between P, S, R : \n";
	cin >> player2;
	
	switch ( player1 ) {
		case 'P': case 'p':
		       	
			 switch ( player2 ) {
        	       	   case 'P': case 'p':
                		cout << "No one wins!\n";
			        break;
               		   case 'R': case 'r':
               		        cout << "Player 1 wins!\n";
            		        break;
            		   case 'S': case 's':
            		        cout << "Player 2 wins!\n";
            		        break;
           		   default:
         	                cout << "Invalid player 2 choice.\n";
      			 }


		  break;
                case 'S': case 's':
                         
                         switch ( player2 ) {
                           case 'P': case 'p':
                                cout << "Player 1 wins!\n";
                                break;
                           case 'R': case 'r':
                                cout << "Player 2 wins!\n";
                                break;
                           case 'S': case 's':
                                cout << "no one wins!\n";
                                break;
                           default:
                                cout << "Invalid player 2 choice.\n";
                         }


                  break;
                case 'R': case 'r':
                         
                         switch ( player2 ) {
                           case 'P': case 'p':
                                cout << "Player 2 wins!\n";
                                break;
                           case 'R': case 'r':
                                cout << "No one wins!\n";
                                break;
                           case 'S': case 's':
                                cout << "Player 1 wins!\n";
                                break;
                           default:
                                cout << "Invalid player 2 choice.\n";
                         }
		default:
			cout << "Invalid player 1 choice.\n";


                  break;
	
	}
	cout << "Thank you for using this program!\n";

	return (0);
}
			
