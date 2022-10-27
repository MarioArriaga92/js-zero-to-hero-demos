# Simple Vanilla JS 1
This simple example is a variation from the content available in [mdn web docs > Guides > Getting started with the web > JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) (feel free to do a walkthrough over its [A "Hello world!" example](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#a_hello_world!_example) section and come back here afterwards to get more context) but with a slight twist by using the javascript code as a function called `userClick` as a handler when user clicking a button to perform the following actions:
1. Change inner text of an `h1` element back and forth between `"My Text"` and `"Javascript is Cool!"`.
2. Adding a class (courtesy of [animate.css library](https://animate.style/) by adding a link to its [CDN](https://animate.style/#usage)) that applies a "shake" effect to the text for a 500 millisecond duration.

## Explanation
[/index.html](./index.html) is a simple HTML page that defined n `h1` element with some text, a button that has its `onclick` property set to `"userClick()"` and a `script` element whose `src` property is set to [scripts/demo.js](./scripts/demo.js)

[/scripts/demo.js](./scripts/demo.js) is a javascript file that initializes the `toggle` variable to `true`, the `originalText` to the text content of the `h1` element (`"My Text"`) and the `currentText` variable to `''` (empty string). It also defines the `userClick` function (it wont get invoked until user clicks on the button) that gets the header, adds the "animated" CSS class to apply the "shake" animation and switches the toggle state so original text of the `h1` element gets replaced with "JavaScript is Cool!"

## See it in action
To see it in action:
1. Clone the project locally (refer to [Microsoft Learn > Azure > Developer > JavaScript > Clone and use a GitHub repository in Visual Studio Code > Clone repository](https://learn.microsoft.com/en-us/azure/developer/javascript/how-to/with-visual-studio-code/clone-github-repository?tabs=create-repo-command-palette%2Cinitialize-repo-activity-bar%2Ccreate-branch-command-palette%2Ccommit-changes-command-palette%2Cpush-command-palette#clone-repository) if needed)
2. Right click on [index.html](index.html) from the [VS Code (File) Explorer](https://code.visualstudio.com/docs/getstarted/userinterface#_explorer) and choose "Copy Path"
3. Open your preferred Internet Browser, paste the path and press enter
4. Click on "Click Me!" button and watch the magic unfold!