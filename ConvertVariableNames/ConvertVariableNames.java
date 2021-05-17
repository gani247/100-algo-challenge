public class ConvertVariableNames
{
	// Method to sort a string alphabetically
	public static String convertVar(String inputString)
	{
	    String outputString = null;
		if(inputString.contains("_")){
        	// c++ to java var conversion
        	String[] arr = inputString.split("_");
        	StringBuilder outputBuilder = new StringBuilder(arr[0]);
        	for(int i=1;i<arr.length; i++){
        	    StringBuilder builder = new StringBuilder(arr[i]);
        	    builder.setCharAt(0, Character.toUpperCase(builder.charAt(0)));
        	    outputBuilder.append(builder);
        	}
        	
        	outputString = outputBuilder.toString();
			
        } else {
        	// java to c++ var conversion
          outputString = inputString.replaceAll("([A-Z])", "_$1").toLowerCase();
        }
          	
        
		return outputString;
	}
	
	// Driver method
	public static void main(String[] args)
	{
		String inputString = "geeks_for_geeks";
		String outputString = convertVar(inputString);
		
		System.out.println("Output String : " + outputString);
      // geeksForGeeks => geeks_for_geeks
      //geeks_for_geeks => geeksForGeeks
	}
}
