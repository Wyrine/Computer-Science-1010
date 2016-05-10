int strcmp(char random1[], char random2[]){
	for (int i=0; random1[i] != '\0'; i++){
		if(random1[i] != random2[i]){
			break;
		}
	}
	return (random1[i] - random2[i]);
}
-------------------------------------------
void strcpy(char target[], char source[]){
	for (int i=0; source[i] !='\0'; i++){
		target[i] = source[i];
	}
	target[i]= '\0';
}

-------------------------------------------

void strcat(char target[], char source[]){
	int i = 0;
	int j;
	while (target[i] != '\0'){
		i++;
	}
	for(j=0; source[j] != '\0'; j++){
		target[i] = source[j];
		i++;
	}
	target[i] = '\0';
}

------------------------------------------

void selectSort(char target[], int n){
	int i, top, minI;
	char temp;
	
		for(top = 0; top<n-1; top++){
			minI=top;
			for(i=top+1; i<n; i++){
				if(target[i]<target[top]){
					minI=i;
				}
			}
			temp= target[top];
			target[top]=target[minI];
			target[minI]=temp;
		}
}