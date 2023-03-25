# JS Introduction

 templates and descriptions

---------------------------------------------

## Content
 1. `async` and `defer` - attributes to control the loading behavior of JavaScript
 2. Output from JavaScript
 3. The use of variables in JavaScript
 4. Overview of JavaScript data types
 5. Arithmetic operators for calculation
 6. Conditional statements


---------------------------------------------

# 1. `async` and `defer` - attributes to control the loading behavior of JavaScript
- With `async` the download of the JavaScript file takes place ansynchronously, so that the processing of the HTML code is not paused. This executes the JavaScript code directly once it is downloaded. Suitable only for scripts that work independently of the HTML document.

    ```
    <script src="script.js" async></script>
    ```

- With `defer` the JavaScript code is not executed until the HTML code has been completely processed. 

    ```
    <script src="script.js" defer></script>
    ```

If neither `async` or `defer` is present: The script is downloaded and executed immediately, blocking parsing until the script is completed.

- If the user has JavaScript disabled, or the web browser does not support JavaScript, a special hint can be given to the user with `<noscript>...</noscript>`.

--> **Examples/Part_1/index.html**
    
   ```
    <script src="js/hello.js" defer></script>
    <noscript>
        JavaScript is not available or it is disabled. <br />
        For optimal use of this website it is recommended to 
        to use a browser like JavaScript or enable JavaScript 
        in your browser.
    </noscript>
   ```

--------------------------------------------

# 2. Output from JavaScript
## Standard dialogs
- `alert()`, the function outputs the text passed between the brackets in a hint dialog.

--> **Examples/Part_1/js/hello.js**
    
   ```
    function showHallo() {
        alert('Hello JavaScript!');
    }

    showHallo();
   ```

 ![Preview](Images/alert.JPG)

- `confirm()`, is the classic OK cancel dialog with two buttons.

- `prompt()`, is the dialog for entering text.

--> **Examples/Part_2/js/demo.js**
    
   ```
    function showConfirm() {
        confirm('Please confirm the process!');
    }

    function showPrompt() {
        var result_text = prompt("What's your name?", "");
        if (result_text == "" || result_text == null)
            history.back();
        else
            alert("Hello, " + result_text);
    }

    showConfirm();
    showPrompt();
   ```
confirm()

 ![Preview](Images/confirm.JPG)

prompt()

 ![Preview](Images/prompt1.JPG)

 ![Preview](Images/prompt2.JPG)

These standard dialogs are rarely used in practice, it depends on the layout and because the application possibilities are very limited. Moreover, the web browser may ignore them if they are displayed repeatedly.


## Output to the console
With `log()`, a method of the `console` object, a simple console output can be generated. However, such a log output in the console is not intended for the user, but for the developer, in order to trace the sequence of individual program sections or to find errors.

--> **Examples/Part_3/js/helloConsole.js**
    
   ```
    function showConsole() {
        console.log('Hello JavaScript-Console!');
    }
    showConsole();
   ```

in the web browser:

 ![Preview](Images/ConsoleLog.JPG)

Besides `console.log` there are other categories of output:

   ```
    console.log('A log message');
    console.warn('A warning message');
    console.info('An information');
    console.error('An error message');
   ```

All functions can be used like `console.log`, only the output in the web console usually changes style.

It is also possible to start the JavaScript code directly from the runtime environment, but for this [Node.js](https://nodejs.org) must be installed on the computer. After installing it you can start the code with *node* (in Visual Studio Code: Run -> Start Debugging -> select "node.js").

 ![Preview](Images/DebugConsoleNode.JPG)

However, the output via the `console` object should only be used during development. Even if the visitors usually do not see this output, the output to the console should no longer be used in the finished website. Some web developers therefore use special logging libraries, with which one can switch the logging information on or off at any time with appropriate configuration.


## Output to the website
The output with standard dialogs is not very nice and the output via `consol.log` is only for developers. So for the user of the website a different output has to be created. That's where the HTML elements and attributes come into play, so a classic input/output can be done directly in a text field up to a DOM manipulation to create an output (where the web page or parts of it are changed dynamically at runtime).

--> **Examples/Part_4/js/pushButton.js**
    
   ```
    let counter = 1;

    function changeText() {
        document.querySelector('p').innerHTML =
            "The button has been pressed! (" + counter + "x)";
        counter++;
    }
   ```

Once the `button` has been pressed, a `click` event is fired, whereupon `onClick="changeText()"` executes the JavaScript with the `changeText()` function. The function changes the content of the first `p` element found and replaces the text in between with `"The button has been pressed! (1x)"`, increasing the value of `counter` by 1 after each new confirmation.

Before pressing the button:

 ![Preview](Images/BeforeButtonPressed.JPG)

After the button is pressed:

 ![Preview](Images/AfterButtonPressed.JPG)


### Comment JavaScript code
It is helpful to add comments to the JavaScript code to be able to understand later what is happening there.

A one-line comment:

   ```
    // One comment
    // console.log('One comment') 
   ```

A multi-line comment:

   ```
    /* A comment,
	   that extends over
       several lines */
   ```

-------------------------------------------

# 3. The use of variables in JavaScript
Variables are declared in JavaScript using either the `let` or `var` keyword, the variable name is followed by a `=` character and the value.
Such variable initialization is done as in algebra:

   ```
    let price = 10;                     // Number
    let pi = 3.14;                      // Number
    let aMessage = "Message";           // String
    let userName = 'Rick Sample';       // String
    let num = 12345;                    // Number
   ```

The variable name must not have any spaces or special characters and must start with a letter. The underscore `_` can be used as the last character, the `$` is theoretically allowed at the beginning or within the name. There is also a distinction between upper and lower case (`var1` and `Var1` are two different variable names).

A statement is always terminated with a semicolon `;`. An instruction in JavaScript is almost every line of a script. Consequently, statements are also the declaration and initialization of variables or the calling of functions.

JavaScript keywords also cannot be used as variable names, these are:

 ![Preview](Images/ReservedJSKeys.png)

Everything between the single or double apostrophes is recognized as a string by the interpreter:
   ```
    let aText01 = "This is a string";           // String
    let aText02 = 'This is a string';           // String
   ```

Without single or double quotation marks, it is a numeric value:
   ```
    let price = 10;                     // Number
    let pi = 3.14;                      // Number
    let textNum = "1234";                    // Caution! This is a string
   ```

## Initalize and assign values
- create a variable with the keyword `let`
   ```
    let myName;             // agreement of a variable
    console.log(myName);    // Output: undefined                 
   ```

- Such an empty agreed variable without an assigned value has a value, this is `undefined`. With the assignment operator a value can be assigned again at any time:
   ```
    let myName;             
    myName = "Sample";      // Value assignment
    console.log(myName);    // Output: Sample                 
   ```

- or the value can be added immediately:
   ```
    let myName = "Sample";            
    console.log(myName);    // Output: Sample                 
   ```

- Likewise, more than one variable can be declared at once, in one statement, separated by commas:
   ```
    let firstName, lastName, myAge;                           
   ```

- the initialization of several variables:
   ```
    let firstName = "Sample", lastName = "Rick", myAge = 42;
    console.log (firstName + "," + lastName + "," + myAge);     // Output: Rick, Sample, 42                          
   ```

- Variables can also be assigned a new/different value:
   ```
    let firstName = "Rick";
    console.log(firstName);    // Output: Rick    
    firstName = "Richard";
    console.log(firstName);    // Output: Richard                      
   ```

## Define constants
JavaScript can also be used to define constants, for which the keyword `const` is available. The value of such a constant cannot be changed after initialization. In practice, such constants are usually rendered with capital letters:
   ```
    const PI = 3.141592653589793;       // create constant 
    console.log(PI);                    // Output: 3.141592653589793
    PI = 3.14;                          // Error! Constant can no longer be changed.  
    console.log(PI);                    // Uncaught TypeError: Assignment to constant variable
   ```

### `use strict` - strict mode
JavaScript is executed in Standard mode without any precaution. In strict mode some constructs can cause errors that are executable in standard mode without any problem, because there are some restrictions in strict mode. This sounds bad at first, but since JavaScript is very fault tolerant, the website may work locally, but as soon as the website is hosted, errors may occur. And that's where the `use strict` mode is helpful, because it doesn't allow these errors from the beginning.

To enable strict mode, it is enough to write this statement at the beginning of the JavaScript program:
   ```
    "use strict";

    // JS code
   ```

Example:
   ```
    "use strict";
    text = "A Message";     // strict mode error
    console.log(text);      // ReferenceError: text ist not defined
   ```


--------------------------------------------

# 4. Overview of JavaScript data types
In JavaScript, no data type needs to be specified during variable declaration, unlike other languages such as C++ or Java. Since the data type in JavaScript is determined at runtime based on the value passed.

JavaScript defines several data types. 
- The primitive types: *string*, *number*, *boolean*, *symbol*.
- special types: *undefined*, *null*
- composite data type: *object* 

The type of a variable is returned with the *typeof* operator. Possible return values are *string*, *number*, *boolean*, *object*, *function*, *symbol* and *undefined*.


## data type *number*
In JS, there is no difference between integers and floating point numbers. All data types for numbers are internally represented by JS as 64-bit floating point values.
   ```
    let integerValue = 12345;
    console.log (typeof integerValue);              // Output: number
    let floatingPoint_Value = 123.456;
    console.log (typeof floatingPoint_Value);       // Output: number
   ```

If a value does not correspond to a correct numerical value, *NaN (not a number)* is used as the value. If the value range has been exceeded or fallen below, *Infinity* or *-Infinity* is used as the value. Therefore there are two constants *Number.POSITIVE_INFINITY* and *Number.NEGATIVE_INFINITY*. If the smallest or largest possible number is to be determined, the constants *Number.MIN_VALUE* and *Number.MAX_VALUE* are used.
   ```
    console.log (Number.MIN_VALUE);              // Output: 5e-324
    console.log (Number.MAX_VALUE);              // Output: 1.7976931348623157e+308
    console.log (Number.POSITIVE_INFINITY);      // Output: Infinity
    console.log (Number.NEGATIVE_INFINITY);      // Output: -Infinity
   ```

When specifying floating point numbers, a period must be used instead of a comma. For higher or smaller floating point numbers, E-notation can be used. A specification of **5e-3** corresponds to **0.005**.
   ```
    let floatingPoint_Value_1 = 5e-3;
    console.log (typeof floatingPoint_Value_1);       // Output: 0.005
    let floatingPoint_Value_2 = 1.2e4;
    console.log (typeof floatingPoint_Value_2);       // Output: 12000
   ```


## data type *string*
*Strings* are used to represent text and consist of a string of 0 or more 16-bit characters. Such string literals can be inserted in JS by placing a text between single or double quotes.
   ```
    let text1 = "String in JS";
    console.log (typeof text1);            // Output: string
    let text2 = "Another string in JS";
    console.log (typeof text2);            // Output: string
    let text3 = "1234";
    console.log (typeof text3);            // Output: string
   ```

Escape sequences are control characters that can be inserted in strings as variable values. Such control characters are introduced with \ followed by the letter marking the control character. 

--> **Examples/Part_5/script.js**

   ```
    let text4 = "Insert a line break\n";      // Line break at the end
    let text5 = "The text is output in the next line. \n";   
    let text6 = "\tThe text will be indented.\n";
    console.log (text4 + text5 + text6);
   ```
Output:

 ![Preview](Images/Preview_5.PNG)

The most important control characters

| control character | meaning                                                    |
|------------------ | -----------------------------------------------------------|
| `\'`              | a single quote within the string                           |
| `\"`              | double quotation mark within the string                    |
| `\\`              | backslash character within the character string            |
| `\n`              | line break in JS on console, for web pages `<br>` applies  |
| `\t`              | tab character, one indent to the right                     |
| `\uXXX`           | this adds a Unicode symbol                                 |


Single strings are linked with the + operator:
   ```
    let text7 = "to be";
    let text8 = "not";   
    let text9 = text7 + "or" + text8 + text7;
    console.log (text9);                       // Output: to be or not to be
   ```

When mixing numbers and strings with the + operator, the result will always be a string:
   ``` 
    let text10 = "The value is: " + 199,99 + 100;
    console.log (text10);                       // Output: The value is 199,99100
   ```

### Template strings
These are string symbols that may span multiple lines and also allow embedded JavaScript expressions. Such template strings are enclosed between two grave accents``` ` ```. This makes it possible to do without line breaks with `\n`:
   ``` 
    let text11 = "last line";
    console.log("first line\n" + "second line\n" + text11);
    // first line
    // second line
    // last line
   ```
the same:
   ``` 
    console.log(`first line
    second line
    ${text11}
    `)
   ```

To insert JavaScript expressions into the strings, the notation `${expression}` is used (expression here `text11`).


## data type *boolean*
The Boolean data type can hold only two values, *true* and *false*. A boolean value is a truth value and usually expresses the validity of a condition. Conditions that contain the value 0, an empty *string*, *NaN*, *undefined* or *null* are also interpreted as *false*. All other values are *true*.
   ``` 
    let val1 = 123;
    let val2 = 456;
    console.log(val1 > val2);    // Output: false
    console.log(val1 < val2);    // Output: true

    let isAdmin = false;
    let isUser = true;
   ```


## Data type *undefined* and *null*
A variable that has not yet been assigned a value has the value *undefined*. Also a non-existing object property or non-existing function parameters have the value *undefined*.
   ``` 
    let name;
    console.log(name);     // Output: undefined
    let name = "Rick Sample";
    console.log(name);     // Output: Rick Sample    
   ```

With the data type *null*, on the other hand, an empty object is represented:
   ``` 
    let name = {
      fname: 'Rick',
      lname: 'Sample'
    };
    console.log(name);     // Output: {fname: "Rick", lname: "Sample"}
    name = null;
    console.log(name);     // Output: null
   ```

The data type *null* is a keyword. The type *null* was listed as a data type, but a *typeof null* returns the type *object*. Variables that are initalized with *null* are *object* types. A variable that is not initalized, on the other hand, is *undefined*. The value *undefined* simply indicates that a variable has not yet been initialized with a value. *null*, on the other hand, is an empty object.


## Data type *object*
Objects are a collection of properties and methods. A method is a function and a property, value or set of values of an object. 
   ``` 
    let name = {
      fname: 'Rick',
      lname: 'Sample'
    };
    console.log(name);     // Output: {fname: "Rick", lname: "Sample"}
   ```

## Convert data types
In this example, the + operator has output the value as a string.
   ``` 
    let text10 = "The value is: " + 199,99 + 100;
    console.log (text10);                       // Output: The value is 199,99100
   ```

However, this only applies to the `+` operator in conjunction with strings. If other operators like `-`, `*` or `/` are used, JavaScript does not convert the numbers into strings anymore, but tries to convert the strings into numbers.
   ``` 
    let text12 = "100" - 42;                    // 58
    console.log(typeof text12);                 // Output: number
    let text13 = "100" + 42;                    // "10042"
    console.log(typeof text13);                 // Output: string
    console.log("6" / "2");                     // Output: 3
   ```

JS cannot know on its own which data type is to be used.  For such purposes JS offers the function `parseInt()` and `parseFloat`. With `parseInt()` a string is converted into an integer. With `parseFloat` a string is converted into a floating point number.
   ``` 
    let iVal = parseInt("100") + 42;         // 142
    console.log(typeof iVal);                // Output: number
   ```

--------------------------------------------------

# 5. Arithmetic operators for calculation
Arithmetic operators are for example `+`, `-`, `*`, `/` or `%`.

   ``` 
    let val1 = 101 + 202;
    console.log(val1);                    // Output: 303
    console.log(88 - 46);                 // Output: 42
    let val2 = val1 * 3;
    console.log(val2);                    // Output: 909
    console.log(val2 / 9);                // Output: 101
   ```

Here, too, as in mathematics, the dot before dash rule applies.
   ``` 
    let val3 = 100 / 2 - 5 * 4;
    console.log(val3);                // Output: 30
   ```

   ``` 
    let val4 = 5 + 6 * 2;                    // 17
    let val5 = (5 + 6) * 2;                  // 22
   ```

In JS there is a *Math* object which can be used for various mathematical functions. Generally this function should be used if no rounding errors should occur. With `Math.random()` a random number is returned. Or `Math.sqrt(x)` which returns a square root of x.


-------------------------------------------------------

# 6. Conditional statements




