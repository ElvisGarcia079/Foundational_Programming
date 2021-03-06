class Main{
    public static void main(String[] args){
        // Initializing a Variable 

        // In Java 8, Declaring Variables will require some knowledge of the Data Type that you'll be using as a value to store. This is because Java 8 unlike Python and Javascript is a Compiled Language as opposed to an Interpreted Language. 

        // We will be working with String, Integer, and Boolean Variables.

        // To Declare Variables, we will need the following:
        /* 
            1. The Keyword String, int, or boolean
                a. If the value is a String, you'll use the keyword String
                b. If the value is a Whole Number, you'll use the keyword int
                c. If the value is a Boolean, you'll use the keyword boolean
            2. A Variable Name
            3. The Assignment Operator
            4. The Value
            5. A Semi Colon
        */

        /* Initializing a String Variable in Java 8 */
        String progLanguage = "Java 8";

        /* Initializing a Whole Number in Java 8 */
        int num = 21;

        /* Initializing a Boolean Number in Java 8 */
        boolean isCoding = true;

        // Printing out the Values of your Variables to the Console using System.out.print() or System.out.println()
        System.out.println(progLanguage);
        System.out.println(num);
        System.out.println(isCoding);

        // You can only get the Data Type value of Object Type Data and not Primitive Type Data. Therefore, if we have a primitive data type that we are working with such as 'int' and 'bool', then we will have to cast it as an Object.

        // Already an Object Type
        progLanguage.getClass().getSimpleName();
        
        // Casting as Object Types
        ((Object)num).getClass().getSimpleName();
        ((Object)isCoding).getClass().getSimpleName();

        // We can store its reference in a variable: 

        // Since they are all objects we will declare them as Objects
        Object progLanguageDT = progLanguage.getClass().getSimpleName();
        Object numDT = ((Object)num).getClass().getSimpleName();
        Object isCodingDT = ((Object)num).getClass().getSimpleName();
        
        // Then we can print its value from that reference
        System.out.println(progLanguageDT);
        System.out.println(numDT);
        System.out.println(isCodingDT);

        //You can ofcourse, also choose to print directly from the reference without storing into a variable as follows: 
        System.out.println(progLanguage.getClass().getSimpleName());
        System.out.println(((Object)num).getClass().getSimpleName());
        System.out.println(((Object)isCoding).getClass().getSimpleName());

    }
}

