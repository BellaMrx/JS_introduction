# JS Introduction

 templates and descriptions

---------------------------------------------

## Content
 1. `async` and `defer` - attributes to control the loading behavior of JavaScript
 2. Output from JavaScript
 3. The use of variables in JavaScript
 4. Overview of JavaScript data types


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


## number -data type
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


## string data type









