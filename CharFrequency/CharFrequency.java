// Java program to sort a string alphabetically and find frequncy

import java.util.Arrays;

public class GFG
{
	// Method to sort a string alphabetically
	public static String sortString(String inputString)
	{
		// convert input string to char array
		char tempArray[] = inputString.toCharArray();
		
		// sort tempArray
		Arrays.sort(tempArray);
      	StringBuilder builder = new StringBuilder();
      	for(int i =0; i< tempArray.length;){
        	int inc = 0;
        	for(int j =i; j< tempArray.length;j++){
            	if(tempArray[i] == tempArray[j]){
                  ++inc;
                }else{
                  	break;
                }
            }
          builder.append(tempArray[i]).append(inc);	
          i += inc;
          	
        }
    
		return builder.toString();
	}
	
	// Driver method
	public static void main(String[] args)
	{
		String inputString = "GeeksforGeeks";//geeksforgeeks
		String outputString = sortString(inputString);
		
		System.out.println("Output String : " + outputString);
    //G2e4f1k2o1r1s2
    //e4f1g2k2o1r1s2
	}
}
