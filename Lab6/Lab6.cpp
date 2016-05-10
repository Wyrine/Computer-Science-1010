/*
File: Lab5.cpp
Kirolos Shahat c1010d25
Date: 11/23/2015
This program takes a file from the user, checks to see if it exists, and then prints out the total characters,
total words, total sentences, average words, number of "to be" verbs, and number of simple sentences
 */ 
//the header files
#include<cstdlib>
#include<iostream>
#include<fstream>
#include<cstring>
#include<iomanip>
using namespace std;


//the constants used in the program
const int MAX_WORD_CHARS = 16; //longest word = 15 chars
const int MAX_WORDS = 200; //longest paragraph = 200 words
const int MAX_PARAGRAPH_CHARS = 3000; //15*20
const int MAX_SENTENCES = 25; //max number of sentences in paragraph
const int MAX_SENTENCE_CHARS = 200; // max number chars in a sentence
const int NUM_TO_BE_VERBS = 5;
const char TO_BE_VERBS[NUM_TO_BE_VERBS][MAX_WORD_CHARS]={"am", "are", "is", "was", "were"};
const char BE[]="be";
const char TO[]="to";
const int NUM_CONJUNCTIONS = 7;
const int MAX_FILE_SIZE = 80;
const int MAX_FILE_NAME = 26;
//conjunctions with the commas
const char CONJUNCTIONS[NUM_CONJUNCTIONS][MAX_WORD_CHARS]={"for", "and", "nor", "but", "or", "yet", "so"};



//prototype calls for the user defined functions
void lowercase(char[]);
int sentenceCount(char []);
int tokenizeParagraph(char[], char[][MAX_WORD_CHARS]);
bool endsWith(char[], char);
int countComplex(char[][MAX_WORD_CHARS], int);
void removePunct(char[][MAX_WORD_CHARS], int);
int toBe(char[][MAX_WORD_CHARS], int);



//main function
int main(){
	//declaring the variables that are going to be used
	ifstream input;
	char filename[MAX_FILE_NAME];
	char paragraph[MAX_PARAGRAPH_CHARS];
	char tp[MAX_WORDS][MAX_WORD_CHARS];
	int pLength, pSentences, numWords, complexSent, toCount, simpSent;
	double avgWord;
	
	//asking the user for a file name
	cout << "Enter input file name: ";

	//reading the file name 
	cin.getline(filename, MAX_FILE_NAME);
	//attempting to open the file
	input.open(filename);

	//if file open fails
	if(input.fail()){
		//print this and terminate
		cout << "Input file " << filename << " does not exist.\n";
		exit(0);
	}
	//otherwise
	else {
		input.getline(paragraph, MAX_PARAGRAPH_CHARS);// stores the paragraph into paragraph array
		//character size of paragraph
		pLength = strlen(paragraph);

		//function call to lowercase everything in the paragraph array
		lowercase(paragraph);

		//count the number of sentences in the paragraph
		pSentences = sentenceCount(paragraph);

		//total number of words in the paragraph
		numWords= tokenizeParagraph(paragraph, tp);

		//average number of words per sentence calculation
		avgWord = numWords/pSentences;
		
		//complex sentence count
		complexSent = countComplex(tp, numWords);
		
		//eliminating punctuation
		removePunct(tp, numWords);

		//to be verb count
		toCount = toBe(tp, numWords);

		//calculate simple sentences
		simpSent = pSentences - complexSent;

		//printing the informatin out to the user
		cout << "Number of characters: " << pLength << endl;
		cout << "Number of words: " << numWords << endl;
		cout << "Number of sentences: " << pSentences << endl;
		cout << setprecision(1) << showpoint << fixed << "Average number words in a sentence: "
		<< avgWord << endl;
		cout << "Number of \"to be\" verbs: " << toCount << endl;
		cout << "Number of simple sentences: " << simpSent << endl;
		
	}
}
/*
lowercase: lowercases every character in the paragraph array
parameters:
	p: array of characters holding the paragraph
return: void function has no return
 */
void lowercase(char p[]){
	//goes through every character stopping at the null character
	for (int i=0; p[i] !='\0'; i++){
		p[i] = tolower(p[i]);
	}
}
/*
sentencecount: goes through the paragraph characters individually and checks to see if they
are end of sentence characters and if so increments the count
parameters:
	p: array of characters holding the paragraph
returns: the sentence count
 */ 
int sentenceCount(char p[]){
	int count=0;
	//goin through the paragraph
	for(int i=0; p[i] !='\0'; i++){
		//checking to see if the current character is an end of sentence character
		if(p[i] == '!' || p[i] == '.' || p[i] == '?'){
			//if so, increment
			count++;
		}
	}
	//return the sentence count
	return count;
}
/*
tokenizeParagraph: takes an array of sentences and splits them up by white space.
Parameters:
	p: the array holding the paragraph
	tp: the "tokenized" paragraph. A 2D array of words with punctuation.
Pre-condition: p has a valid paragraph in it and tp has been allocated space
Post-condition: tp has been filled with all words/punctuation and p has been altered to hold only its last token
Returns: the number of words in paragraph
*/
int tokenizeParagraph(char p[], char tp[][MAX_WORD_CHARS]){
	int i = 0;
	char* cPtr;
	cPtr = strtok(p, " \n\t");
	while (cPtr !=NULL){
		strcpy(tp[i], cPtr);
		i++;
		cPtr=strtok(NULL, " \n\t");
		
	}
	return(i);
}
/*
endsWith: takes an array of characters and a single character and returns true if the last character of that
single string is equal to single
parameters:
	s: a single c string array
	single: an individual character
returns: true if the last character of s is equal to single, otherwise false
 */ 
bool endsWith(char s[], char single){
	//string length to get where the null character will be
	int length = strlen(s);
	//comparing the the character right before the null character to single
	if(s[length-1] == single){
		//if equal
		return true;
	}
	else{
		//if not
		return false;
	}
}
/*
countComplex: takes a 2D array of characters and the total number of words in the paragraph and returns the
number of complex sentences in the paragraph
parameters:
	tp: A 2D array of characters that has been tokenized
	numWords: pass by value total number of words in the paragraph
returns: complex sentence count of the paragraph
 */
int countComplex(char tp[][MAX_WORD_CHARS], int numWords){
	int count=0;
	//going through each string
	for(int i=0; i<numWords; i++){
		//each of the const conjunctions
		for(int j=0; j<NUM_CONJUNCTIONS; j++){
			//if the next string matches the current conjunction
			if(endsWith(tp[i], ',') && tp[i+1] == CONJUNCTIONS[j]){
				//increment
				count++;
			}
		}
	}
	//return increment
	return count;
}
/*
removePunct: checks each character of the array and replaces any punctuations with null characters
parameters: 
	tp: a 2D array of characters that has been tokenized
	numWords: pass by value total number of words in the paragraph
returns: void has no returns 
 */ 
void removePunct(char tp[][MAX_WORD_CHARS], int numWords){
	for(int i=0; i<numWords; i++){ // first dimension of the array
		for (int j=0; tp[i][j] != '\0'; j++){ //second dimension(each character)
			//checking to see if current character is a punctuation
			if( tp[i][j] == '!' || tp[i][j] == '.' || tp[i][j] == '?'){
				//if true
				tp[i][j] = '\0';
			}
		}
	}
} 
/*
toBe: goes through the paragraph and checks for "To Be" verbs and counts them
paramaters: 
	tp: a 2D array of characters that has been tokenized
	numWords: pass by value total number of words in the paragraph
returns: the number of "To Be" verbs in the paragraph
 */ 
int toBe(char tp[][MAX_WORD_CHARS], int numWords){
	int count=0;
	for(int i=0; i<numWords; i++){
		for(int j=0; j<NUM_TO_BE_VERBS; j++){
			if(strcmp(tp[i], TO_BE_VERBS[j]) == 0){
				count++;
				break;
			}
		}
		if(strcmp(tp[i], TO) == 0 && strcmp(tp[i], BE) == 0){
			count++;
		}
	}
	return count;
}





	





