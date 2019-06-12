/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. //Global binding: this refers to the Global object.;
 * 2. //implicit binding: this will be whatever is after the dot.
 * 3. 
 * 4. 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
sayName("D'Artagnan");

// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('deivy');


// Principle 3
// code example for New Binding

//is function
// Principle 4

// code example for Explicit Binding