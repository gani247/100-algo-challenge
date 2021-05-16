// Java program to sort a string alphabetically

import java.util.Arrays;

public class GFG
{
	// Method to sort a string alphabetically
	public static int findNumber(int n, int[] arr)
	{
	    
        Arrays.sort(arr);
        int majority = arr[0];
        int count = 1;
        
        for(int i = 1; i<arr.length; i++) {
            if(arr[i]==majority)
                count++;
            else {
                if(count <= Math.ceil(n/2)){
                    majority = arr[i];
                    count = 1;
                } else break;
            }
        }
        System.out.println(count+","+majority);
		return count > Math.ceil(n/2) ? majority : -1;
	}
	
	// Driver method
	public static void main(String[] args)
	{   int[] arr = new int[]{2,3,2,2,2,3,3,3,3};
		int majorityNumber = findNumber(arr.length, arr);
		
		System.out.println("majorityNumber : " + majorityNumber);
      
	}
}
