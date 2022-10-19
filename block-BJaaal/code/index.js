//  Template literal

/* Do the following:
- Define a variable named `username` using `const` keyword and assign your name as a value.

- Define another variable named `bio` and assign a value `Learning to code`. Use `let` keyword to define the variable.
*/
const userName="rahul";
let bio ="learning the code";

let firstName = "Arya";
let lastName = "Stark";

/* Do the following using `+` operator
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.


  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.

*/
alert("i am "+userName+""+" and my bio is " + ""+bio);
alert("I \` m "  + firstName + " "  + lastName + "" + " of winterfall");

/* Do the following using string template literal
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
    Alert(`I` am [userName] ${bio}`);

  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.

*/
alert(`I am ${userName} and my bio is ${bio}`);
alert(`I\` m ${firstName} ${lastName} of winterfwll`);

let amount = 200;
const taxPercent = 10;

/* Use string template literal:
  - Alert a message saying `The total amount is [amount]
  Alert (total amount ${200}`);
    the tax amount is [(amount * taxPercent) / 100]
  
*/
alert(`The total amount is ${amount}
the tax amount is ${(amount * taxPercent)/ 100 }`);

/* Use double quote and escape character:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  `
  - Above message should be in two lines
*/
alert("The total amount is" + amount + "\n the tax amount is" + ((amount * taxPercent) / 100 ));
