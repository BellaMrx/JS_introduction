# JS Introduction

 templates and descriptions

---------------------------------------------

## Content
 1. `async` and `defer` - attributes to control the loading behavior of JavaScript
 2. Output from JavaScript
 3. The use of variables in JavaScript


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

It is also possible to start the JavaScript code directly from the runtime environment, but for this [Node.js](https://nodejs.org) must be installed on the computer. After installing it you can start the code with **node** (in Visual Studio Code: Run -> Start Debugging -> select "node.js").

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
