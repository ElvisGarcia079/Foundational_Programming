# Simple Variables in Java 8

Variables in Java can be a little more demanding. Since Java 8 is a Compiled Language, it requires information upfront. Here are the things that you'll need to declare basic variables for `Integers`, `Strings`, and `Booleans`.
* The Keywords `String`, `int`, or `boolean`
    * If the variable's value is a String you will use `String`
    * If the variable's value is an Integer you will use `int`
    * If the variable's value is a Boolean you will use `boolean`
* The Variable Name
* The Assignment Operator
* The Variable Value
* A Semicolon at the End

We will be working with the Primitive Data Types: 
* `Strings`
* `Numbers/Integers`
* `Booleans`

(You can make variables of any expression in Java 8, you just have to know its type.)

Whenever you want to check the value of your variables you can use the Java 8 System Out Print Method:
* `System.out.print()`
* `System.out.println()`

Whenever you want to check the data type of your variable, you can use the following Java 8 Method: 
* `.getClass().getSimpleName()`

Unlike JavaScript and Python, you will not be passing in your variable as an argument, but instead you'll be calling these methods on that variable: 
`{yourVariable}.getClass().getSimpleName()`

If you would like to see the result of the Data Type on the console or output screen, you will have to wrap the return value of the `.getClass().getSimpleName()` method within the parentheses of the `System.out.print()` or `System.out.println()` methods as follows: 
* `System.out.print({yourVariable}.getClass().getSimpleName())`
* `System.out.println({yourVariable}.getClass().getSimpleName())`

You can also store the reference to your `.getClass().getSimpleName()` method in a variable first. Then log to the console the value of that reference using `System.out.print()` or `System.out.println()` as follows: 
* `String reference = someVariable.getClass().getSimpleName();`
* `System.out.print(reference);` or `System.out.println(reference);`

## Happy Coding!